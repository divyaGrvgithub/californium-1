// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler

const today =new Date()
let printDate = function(){
    return today.currentdate()
}
let printMonth = function(){
    return today.currentmonth()
}
let getBatchInfo = function(){
    return "Californium, W3D4,the topic for today is Node js module system"
}

module.exports.myDate = printDate;
module.exports.myMonth = printMonth;
module.exports.myBatchInfo = getBatchInfo;
