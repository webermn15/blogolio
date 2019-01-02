---
title: USB controllers, Py, and Pi
date: '2018-12-31'
spoiler: My contribution to a cool project
author: Webs
tags: ["Programming", "SSBM"]
---

Last summer, I had the opportunity to contribute to an awesome project by [Abbie Rappaport](https://twitter.com/spoo0py), a Master's student at the University of Concordia in Montreal. Abbie is studying the esports community built around Super Smash Bros. Melee, an ancient title by competitive gaming standards with a deep, rich history. [The project](https://www.abbierappaport.com/games) brings together several different mediums to best introduce the uninitiated to what makes SSBM so special amongst gaming communities. I can't encourage you enough to follow through that link and check it out for yourself!

To quote the project link above, an overview:
> The work is a combination of writing, drawings and design elements that offers insight about this passionate community. This interdisciplinary work has been uploaded to a raspberry pi, housed in a handmade case, styled after the Nintendo Gamecube. The pi includes a program specific to the work, that allows one to navigate through the piece with a Gamecube controller, using the joystick to scroll and various buttons to zoom in and out. The piece is displayed on a CRT television. These two pieces of hardware are used unanimously in the SSBM community.

In even simpler terms, it's a means of allowing viewers to simultaneously learn about *and experience* why SSBM is unique. It's so cool.

![Photo from [Residual Media Depot's twitter account](https://twitter.com/residualmedia)](./cube-comparison.jpg)

> Picture from [Residual Media Depot's twitter account](https://twitter.com/residualmedia)

My role was to help bring the programming aspect of it to life. Here's a quick breakdown of key points:

 - Composite video out. One of the most obvious distinguishing factors of SSBM is that it's still played on old CRT televisions, since the Gamecube was released in 2001 and serves video out through tri-color cables.
 - USB controller input. The informational image being displayed is very high-res, so it's huge. As such, someone interacting with it will need to be able to scroll, pan, and zoom to see the entire thing. Fortunately, there are plenty of third-party USB Gamecube controller replicas.
 - An image viewer! Something that can handle large resolutions and allows for all the functionality described in the previous bullet point; scrolling, panning, and zooming.
