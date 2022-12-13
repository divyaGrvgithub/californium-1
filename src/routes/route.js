// const express = require('express');
// const router = express.Router();


// router.get('/test-me', function (req, res) {
//     res.send('any dummy text')
// });


// router.get('/test-you', function(req, res){
//     console.log("I am here")
//     res.send("very important text")
// })


// module.exports = router;

const express = require('express');
const app = express.Router();
//Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
//: 4 is missing
// Your route code will look like this
app.get('/missingNumber',(req, res) => {
  const arr = [1, 2, 3, 5, 6, 7];
  let missingNumber = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
          missingNumber = arr[i] + 1;
          break;
      }
  }
  res.send(`The missing number is ${missingNumber}`);
});
  module.exports = app;

  
// Q2.
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,
//34, 35, 37, 38]: 36 is missing
// Your route code will look like this
app.get('/missingNumber1', (req, res) => {
    const arr = [33, 34, 35, 37, 38];
    let missingNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            missingNumber = arr[i] + 1;
            break;
          
        }
         }
    res.send(`The missing number is ${missingNumber}`);
  });
  module.exports = app;
