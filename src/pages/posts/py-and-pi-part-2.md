---
title: Py and Pi, part 2
date: '2019-01-06'
spoiler: Handling USB data with Python
author: Webs
tags: ["programming", "ssbm"]
---
If you haven't yet, please check out [part one](https://websdev.io/posts/a-usb-controller-py-and-pi/) of this little two part blog post for context on this post! :)

challenges:
* how to read usb data in linux => dev/usb
* how the data is structured and how to decode that structure => struct and its formatting
* mapping the now decoded struct data to inputs representative of the actions you want to achieve => python keyboard libraries
* achieving concurrency so you can poll for inputs continuously and read them without interrupting your polling => python threading
