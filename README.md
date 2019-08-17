# Friend-Finder :dancers:

## Overview

Compatibility-based "FriendFinder" application --  a dating app for a friend.

## Functionality Breakdown
This **full-stack site** takes in results from users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Technical Approach
Orgnaize the directories to be as below:
 - .gitignore
  - app
    - data
      - friends.js
    - public
      - home.html
      - survey.html
    - routing
      - apiRoutes.js
      - htmlRoutes.js
  - node_modules
  - package.json
  - server.js

1. Install npms to be required - express and path
1. Create server.js file that will require the api routes and sets up the listener on the port
1. Use HTML, Boostrap and CSS to make a home page and survery page to take in the survey inputs. 
1. Add modal to the survey page to display the friend the user matched with 
1. Create a friends.js data file with the following:
    1. An array containinng all the s
1. Set up the apiRoutes.js file with the following api routes:
    1. Get route "/api/friends" -  Displays the JSON of the all the potential friends on the app
    1. Post route "/api/friends" - takes in the users survey answers, changes numbers from strings into integers  and calls funciton that will check who is the best match to the user then send the answer back to be displayed to the user.  Finally it saves the user into the friend array. 
