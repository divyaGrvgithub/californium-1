const express = require('express');
const router = express.Router();
// const intro = require('./introduction')
// const employee = require('./employee')
const log = require('../logger/logger')
const uti = require('../util/helper')
const val = require('../validator/formatter')
const _ = require('underscore')
const Lo = require('lodash')

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)
    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)
    console.log("Calling my function",log.myFunction())
    console.log(uti.myDate())
    console.log(uti.myMonth())
    console.log(uti.myBatchInfo())
    console.log(val.mydivya())

    // Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays
    // using the chunk function. Print these sub-arrays on console.

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    console.log(_.chunk(months,4));

    // Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.

    const oddnum=[1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(oddnum,9));

    // Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique 
    // values and print them on console

    const allnum=[2,5,4,2,7,4];
    console.log(_.union(allnum));

    // Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],
    // [“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

    const pair=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
    console.log(_.fromPairs(pair));

    res.send('my first ever api!')
});


// router.get('/test-you', function(req, res){
//     console.log("I am here")
//     res.send("very important text")
// })

module.exports = router;