---
title: Kiwitype
description: A typing speed test in the style of Type Racer
repo: https://github.com/webermn15/kiwitype
link: https://kiwitype.herokuapp.com
id: 1
---

I based KiwiType on my most beloved speed-typing game, Type Racer. It's a **React** application that uses **Redux** for state management, and in order to have complete control while setting up my boilerplate and configurations I delved into building a good understanding of **Webpack** as opposed to leaning on everyone's favorite React CLI tool, Create-React-App. I developed it using Webpack's webpack-dev-server, but in production it's served via **Express**. The back-end is handled by a **Ruby Sinatra** API that uses **ActiveRecord** to interface with a **PostreSQL** database, and Superagent for HTTP requests. I challenged myself with this build to write my own React project from the ground up in order to further understanding of configuring for development vs production and learn new tools to enhance my React applications.

Recently, I revisited this project with the idea of cleaning up the codebase and tying up some loose ends I left unfinished (My error handling in particular left something to be desired). I added a new component to display errors, restructured the directory structure from a filetype-based organization system to a feature-based one, and yes, cleaned up the error-handling, although undoubtedly I will revisit this once more sooner than later, as I'm pretty dissatisfied with it as of yet.