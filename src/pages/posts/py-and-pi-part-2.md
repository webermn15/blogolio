---
title: Py and Pi, part 2
date: '2019-02-28'
spoiler: Handling USB data with Python
author: Webs
tags: ["programming", "ssbm"]
---
If you haven't yet, please check out [part one](https://websdev.io/posts/a-usb-controller-py-and-pi/) of this little two part blog post for context on this post! :)

A quick and dirty recap; I've a 3rd party **USB Gamecube controller**, a **Raspberry Pi 3**, and a **large image file** displayed using **[Feh](https://feh.finalrewind.org/)** that I intend to scroll, pan, and zoom around using the controller. How do I accomplish this?

## Challenges:
* Read the USB device data in Linux
* Interpret or decode that data
* Map the input data to manipulate the image file in Feh
* Launch the script & image viewer on Pi startup

I began by searching for any existing libraries or software that could manage the first two bullet points for me. This lead me to [jstest-gtk](https://jstest-gtk.gitlab.io/), a joystick testing & configuration tool for Linux. And... it worked! Kind of. It only read *some* my 3rd party controller's inputs, and aside from that, didn't feature an easy way to remap keys the way I'd have liked to. However, as a complete Linux newbie I was quite thankful that it introduced me to the usb device input interface.

![jstest-gtk gui screenshot](./jstestgtk.png)

> Screenshots of the [jstest-gtk](https://jstest-gtk.gitlab.io/) GUI courtesy their website

As luck would have it, I stumbled upon an [incredibly useful SO thread](https://stackoverflow.com/questions/16032982/getting-live-info-from-dev-input) 