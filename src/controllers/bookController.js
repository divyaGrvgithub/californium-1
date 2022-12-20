const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

const getBooksInYear = async function(req, res){
    let data= req.query.year
    let allBooks=await BookModel.find({year : data});
    res.send({msg: allBooks})
}

const getParticularBooks=async function(req,res){
    let value=req.query.bookName
    let allBooks=await BookModel.find({bookName : value})
    res.send({msg: allBooks})
}

const getXINRBooks=async function (req,res){
    let allBooks=await BookModel.find({"prices.indianPrice":{$in:["200","100","500"]}})
    res.send({msg:allBooks})
}


const getRandomBooks=async function(req,res){
    let allBooks= await BookModel.find({$or:[{Instock:true},{pages:{$gt:300}}]})
    res.send({msg:allBooks})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
    