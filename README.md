Assignment link - https://docs.google.com/document/d/1t6B5EJusagBoFsi4IINvwpY4FOagxtRYuIxyhEjFFOs/edit 

<!-- Index
Content
Assignment and solution


CONTENT Summary:

Started with Mongoose(MongoDb) previous day
Discussed schemas and models and various dataTypes available 

-Object
- Date
-String
-Number
- Boolean
-Array

Also basic schema validation : required, unique and default
Various MongoDB queries ( find findById count select sort limit skip)
Filter conditions inside find 
//  OR:   .find(   { $or : [ {cond1 } , {cond2} , {cond3} ] }  )    
// { $in : [0,10,20, 30, 40, 50] }
// $eq
// {$ne: "Intro to Coding" }
// $gt:
// $lt:
// $gte:
// $lte:
// $in:
// $nin: -->


Introduced regex( we will not cover regex in details , only mentioned use cases for regex and showed a couple of examples)

Intro to async await( havent touched promises) - await is to force JS to stop for the code execution to complete ( Avoid promises as of now)

<!-- Sample model: -->

 
<!-- const mongoose=require('mongoose')
 
const bookSchema= new mongoose.Schema({
   bookName: {
       type: String,
       required: true
   },
   ISBN: {
       type: String,
       required: true,
       unique: true
   },
   author: String,
   tags: [ String ], //array of strings
   year: Number,
   isPublished: {
       type: Boolean, //Boolean
       default: false
   },
   prices: {
       indianPrice: String,
       europeanPrice: String,
       japanPrice: String
   },
   sales: {
       type: Number,
       default : 0
   },
   completionDate: Date
 
}, {timestamps: true} )
 
module.exports = mongoose.model( 'Book', bookSchema ) -->

<!-- Assignment :- -->

1- Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false)
create the following API’s (write logic in bookController and routes in routes):
createBook : to create a new entry..use this api to create 11+ entries in your collection
bookList : gives all the books- their bookName and authorName only

2-getBooksInYear: takes year as input in post request and gives list of all books published that year

3-getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition 	
e.g if body had { name: “hi”} then you would fetch the books with this name
if body had { year: 2020} then you would fetch the books with this name
hence the condition will differ based on what you input in the request body

4-getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”

5-getRandomBooks - returns books that are available in stock or have more than 500 pages 

