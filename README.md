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
1. Set up the server.js file to require express, the api routes and set up the listener on the port - will be used with node to initiate the app
1. Use HTML, Boostrap and CSS to make a home page and survery page to take in the survey inputs. 
1. Add modal to the survey page to display the friend the user matched with 
1. Create a friends.js data file with the following:
    1. An array that will store the following user ("friends") information:
       - name
       -url of their photo
       -user's survey scores
    1. Functions that handle the comparison logic that will do the following:  
       -compare the difference between current user's scores against those from other users, question by question. Adds up the differences to calculate the totalDifference and ensures there will be no negative solutions. The closest match will be the user with the least amount of difference and the current users future friend!

        Example:

       User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

       User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

       Total Difference: 2 + 1 + 2 = 5

The closest match will be the user with the least amount of difference.
1. Set up the apiRoutes.js file to require the path and comparison functions from the friends.js file along with the following api routes:
    1. Get route "/api/friends" -  Displays the JSON of the all the potential friends on the app
    1. Post route "/api/friends" - handles incoming survey results then does the following:
       - changes user's score from strings into integers and stores them in an array
       - calls comparison functions
       - sends result back to be displayed in the modal
1. Set up the htmlRoutes.js to require path along with the followign html routes:
   1. Get route "/survey" - displays the survey html page
   1. Get route "/" - displays the home html page
