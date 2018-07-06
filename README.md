1. How far did you get?

I got each of the events displaying form each of the resources and links to the event itself. they are each displayed in their own columns and source titled at the top.

1. How pleased are you with your solution?

not so much. This Challenge is the very fist time I've ever used Cheerio package and any web scraping form an already made page.
I had fun making it and learning how to use it along with the jquery api. (also never used it before) most of my time was spent learning.

1. What is the next thing you would do if you had more time?

extract the api calls form the component level and add redux. I wanted to parse all of the html code on the server before sending it to the frontend and just use the data points that i needed. Also i  would make a my own event page with just one event, right now its just a link and then auth to be able to rsvp to any event on any site.


1. Talk about performance concerns on the frontend

everything is on the frontend right now which i don't like, was trying to set up an api where i could format the data in the way i needed and then send it to my frontend, i was getting a JSON circle err and after an hour i gave up the task to get an mvp which makes the ajax calls directly form the source. i did not make an api to go along with this.

1. How do you handle the list as you continue scrolling and it gets super long?

Rather than make one really long list I made three, all side by side, so the user can see events form multiple sources at once. However some came back with more events than others, I've never done infinite scrolling before, but would like to add a ping for more events as i get towards the end of the current data.

### to view
---
use chrome extension to bypass cors
https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en
make sure it is "ON"

> git clone

>npm install

>npm run start


## Live site

http://aldo-web-dev-events.surge.sh/
