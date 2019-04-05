---
title: Py and Pi, part 3
date: '2019-03-20'
spoiler: A nice & clean little script
author: Webs
tags: ["programming", "python"]
---
This is the final entry in my three part writeup of my first foray into Python & Raspberry Pi programming. You can find [part one](https://websdev.io/posts/a-usb-controller-py-and-pi/) and [part two](https://websdev.io/posts/py-and-pi-part-2/) at these respective links!

I encourage you to check out my previous posts, but for those with limited time, I'll summarize briefly. At the outset, I was brought in with a vague goal; **display a large image file on a CRT monitor or television, and allow for a user to pan, scroll, and zoom around the file with a third party USB gamecube controller**. In **part 1**, I gave a brief background of the larger project and reviewed the hardware I chose to accomplish the task. In **part 2**, I delved a bit deeper, walking through my learning process in regards to handling the USB device data with Python.

![Michael the frog working hard](./me.jpg)

> Pictured: me writing this post

Now, in part 3, it's time to assemble the pieces, complete the Python script, and tie up a few loose ends. 

I left off on this script, which reads the USB controller's input data and returns a tuple containing those values. (I covered this in detail in [part two](https://websdev.io/posts/py-and-pi-part-2/) if you're inclined!)

```python
infile_path = "/dev/input/js0"
EVENT_SIZE = struct.calcsize("LhBB")
file = open(infile_path, "rb")
event = file.read(EVENT_SIZE)
while event:
    print(struct.unpack("LhBB", event))
    (tv_msec,  value, type, number) = struct.unpack("LhBB", event)
    event = file.read(EVENT_SIZE)
```
> Thank you again to Aaron from this [SO post](https://stackoverflow.com/a/49291640/9248927) for this snippet

Moving forward, these values needed to be converted into inputs that manipulate the image file on the Pi. Fortunately, with [Feh]([https://feh.finalrewind.org/](https://feh.finalrewind.org/)), I'd already chosen a flexible image viewer with built in keyboard commands that make the job much easier. The controller's buttons can be easily remapped to keyboard actions using a Python library. [PyUserInput's](https://pypi.org/project/PyUserInput/) PyKeyboard worked great.

After some trial and error, I was able to determine which numbers corresponded to each individual controller input, & I wrote a little elif tree function to convert the controller data to keyboard inputs. 

The final issue I was running into was the read of the `js0` file; once called, the `while event:` loop *blocks* the thread, waiting for data to be written to the file. 

To deal with this, I moved the file read to its own class and introduced **threading** to the script. Threading in Python allows you to execute multiple tasks simultaneously, so I could begin execution of the `js0` file read and continuously poll it at the same time. 

```python
class ControllerPoller (threading.Thread):
    def __init__(self, path, calcsize):
        threading.Thread.__init__(self)
        self.path = path
        self.calcsize = calcsize
        self.value = 0
        self.itype = 0
        self.number = 0

    def run(self):
        portal = open(self.path, "rb")
        event = portal.read(self.calcsize)
        while event:
            (msec, value, itype, number) = struct.unpack("LhBB", event)
            self.value = value
            self.itype = itype
            self.number = number
            event = portal.read(self.calcsize)

    def get_info(self):
        return (self.value, self.itype, self.number)
```
> Same little block of code, shiny new bells & whistles

The snippet has evolved into `ControllerPoller`! 

I moved the USB controller file read to the `run()` method, and initialized it on a new thread. Now, when the class is instantiated & the `start()` method is called, any other execution further down the script won't be blocked, and the instance of `ControllerPoller`'s **value**, **itype**, and **number** properties are updated with every new read of the `js0` file. 

In addition, I added the `get_info()` method that returns those values when called. So, our order of execution looks like this:

 1. Declare the path to the USB file you're reading, and calculate the size of the struct you're unpacking
 2. Instantiate the `ControllerPoller` class, passing it the file path and the struct size variables
 3. Call the `start()` method of the class instance, spawning a new thread of execution that reads the USB controller's values each time the USB data file is written to, and holds those values until they're overwritten
 4. On the main thread, start a polling loop that uses the `get_info()` method to continuously check the USB values and pass them to the keyboard input conversion function

With my image opened in Feh, **it worked**!!!

As a last bit of cleanup, I wrote a shell script that both launched the image file in Feh and executed the Python script to make setting up as easy as possible. One double click launches everything.

As with many of my little projects, I tackled several problems I'd never encountered before, and I really enjoyed researching and working on this code. If you stuck through the whole read, thank you! I hope you learned something new too. Here's the completed file:

```python
import time
import threading
import struct
from pykeyboard import PyKeyboard

kb = PyKeyboard()

file_path = "/dev/input/js0"
event_size = struct.calcsize("LhBB")


def convert_inputs(data):
    (value, itype, number) = data
    if itype == 2 and number == 2:
        if value > 0:
            kb.press_keys(['Control_L', 'Right'])
        if value < 0:
            kb.press_keys(['Control_L', 'Left'])
    if itype == 2 and number == 1:
        if value > 0:
            kb.press_keys(['Control_L', 'Down'])
        if value < 0:
            kb.press_keys(['Control_L', 'Up'])
    elif itype == 1 and number == 0:
        if value == 1:
            kb.press_key('Up')
        if value == 0:
            kb.release_key('Up')
    elif itype == 1 and number == 1:
        if value == 1:
            kb.press_key('Down')
        if value == 0:
            kb.release_key('Down')


class ControllerPoller (threading.Thread):
    def __init__(self, path, calcsize):
        threading.Thread.__init__(self)
        self.path = path
        self.calcsize = calcsize
        self.value = 0
        self.itype = 0
        self.number = 0

    def run(self):
        portal = open(self.path, "rb")
        event = portal.read(self.calcsize)
        while event:
            (msec, value, itype, number) = struct.unpack("LhBB", event)
            self.value = value
            self.itype = itype
            self.number = number
            event = portal.read(self.calcsize)

    def get_info(self):
        return (self.value, self.itype, self.number)


poll_usb = ControllerPoller(file_path, event_size)

if __name__ == "__main__":
    poll_usb.start()

    while True:
        convert_inputs(poll_usb.get_info())
        time.sleep(0.025)

```

Simple enough! :)

If you've any feedback or otherwise please don't hesitate to reach me at my [twitter](https://twitter.com/_websdev)!

--Michael

> Questions? Comments? Find me on Twitter at https://twitter.com/_websdev