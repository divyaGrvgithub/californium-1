# Californium

Backend cohort Nov 2022 - Mar 2023


# Assignment

https://docs.google.com/document/d/1fsz27ekIG7l_FBSL1mIw-1vXTDNJun3HNrP-EG4oR94/edit?usp=sharing

Note: The following must be submitted in a new branch in your repository. The branch must be named assignment/nodejs-modules

Problem 1
Module1 : src/logger/logger.js containing the following exported function

- welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Californium cohort.’ on console



Call welcome in route.js inside the test-me handler

Problem 2
Module 2 : src/util/helper.js

- printDate() : prints the current date
- printMonth() : prints the current month
- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
	Call all these functions in route.js inside the test-me route handler

Problem 3
Module 3: src/validator/formatter.js
- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

Call all these functions in route.js inside the test-me route handler

Problem 4
Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays on console.
- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
- Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console
- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]




