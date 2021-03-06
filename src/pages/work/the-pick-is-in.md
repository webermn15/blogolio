---
id: 3
title: The Pick Is In
description: An in-person Fantasy Football draft tool
repo: https://github.com/webermn15/thepickisin
link: http://friendsofgroup.com
thumbnail: './img/thepickisinthumb.png'
tech: ["reactjs", "webpack", "nodejs"]
---

Built in React, ThePickIsIn simply takes a MySQL db of football players and populates filterable lists sorted by position. When a player is selected, they are toggled to 'unavailable', and are by default removed from the position's list. You can toggle to show unavailable players and make them available again if there is an input error. Each player selection is accompanied by an audio announcement of the pick which is a big part of the reason why I was inspired to create it, because announcing picks is one of the most entertaining aspects of drafting in person.

In the future, I'd like to expand this application to include the creation of league accounts, allowing for the configuration of draft settings & preservation of the results of the draft. Ideally, you would then be able to export these results in a variety of data formats so you could easily save and reuse them in the future. I don't want to add a thousand bells and whistles to the application- a big motivator for creating this project was to keep it very simple and with minimum setup, but there's definitely room for a great deal of improvement, especially considering how bare-bones my back end is at the minute. I'll likely end up revisiting this project towards the end of the summer so my league can utilize the new and improved version.