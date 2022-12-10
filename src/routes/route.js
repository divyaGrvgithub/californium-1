const express = require('express');
const router = express.Router();
const intro = require('./introduction')
// const employee = require('./employee')
// const _ = require('underscore')
// const mentorModule = require('../abc/xyz/myModule'); 
// const req = require('express/lib/request');
// const { route } = require('express/lib/application');

// Problem -1

/*1- Create an API for GET /movies that returns a list of movies. Define an array of movies 
in your code and return the value in response.*/

router.get('/movies',function(req,res){
    const movies =["Rang de basanti","the shining","Lord of the rings","Batman begins"]
    res.send(movies)
})

// Problem 2 and 3

/*2- Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it 
should return the movie in your array at index 1). You can define an array of movies again in your api
[‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]
Example of a request url -> localhost:3000/movies/2
3- Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message
is returned that tells the user to use a valid index in an error message.*/

router.get('/movies/:indexNumber',function(req,res){
    let movies1= ["Rang de basanti","the shining","Lord of the rings","Batman begins"]
    let index = req.params.indexNumber
    console.log(movies1[index]);
    res.send("At index : - "+movies1[index])
})

// Problem - 4

/* 4- Write another api called GET /films. Instead of an array of strings define an array of movie 
objects this time. Each movie object should have values - id, name. An example of movies array is */

router.get('/films',function(req,res){
const grvid= [
    {
        id : 1,
        name : "Rang de basanti"
    },
    {
        id : 2,
        name : "The Shining"
    },
    {
        id : 3,
        name : "Lord of the rings"
    },
    {
        id : 4,
        name : "Batman begins"
    }]

    res.send(grvid)
})

// Problem - 5

/*5- Write api GET /films/:filmId where filmId is the value received in request path params. 
Use this value to return a movie object with this id. In case there is no such movie present
in the array, return a suitable message in the response body. Example for a request GET /films/3 
should return the movie object*/

router.get('/films/:id',function(req,res){
    let idparam = req.params
    const grvbaeid = [
        {
            id : 1,
            name : "Rang de Basanti",
        },
        {
            id : 2,
            name : "SitaRaman",
        },
        {
            id : 3,
            name : "Cuto ka Jalwa",
        },
        {
            id : 4,
            name : "Kicchu ka Bhaukal",
        }]
        if(idparam.id>(grvbaeid.length+1)||idparam.id==0){
            res.send("No such movies exist with this id")
        }
        for(i of grvbaeid){
            if(i.id==idparam.id){
                console.log(i)
                res.send(i.name)
            }
        }
    })

// router.get("/profile-details", function(req, res){
//     // Write the LOGIC here
//     res.send('dummy response')
// })

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Divyagrv')
})
//     console.log("email from employee module", employee.myEmail)

//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     let result = _.first(days, 4)
//     console.log(`Result from underscore function is ${result}`)
//     console.log(`The mentor of the day is ${mentorModule.mentor}`)

//     res.send('any dummy text from route handler 1')
// });


// router.get('/test-me', function(req, res){
//     console.log("I am here")
//     res.send("any dummy text from route handler 2")
// })

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// // PATH Param example
// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use many ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

// // PATH Param example
// router.get("/profile/:name", function(req, res){
//     console.log('Printing the request to find out wjere name is stored',req.params)
//     console.log('user name is',req.params.name)
//     //console.log(`User requesting for profile is ${name}`)
//     res.send("dummy details")
// })

// // Query Param example
// router.get("/shoes", function(req, res){
//     console.log("The filter options for shoes are -",req.query)
//     //req.query.size
//     //req.query.brand
//     res.send("dummy shoes response")
// })

module.exports = router;

