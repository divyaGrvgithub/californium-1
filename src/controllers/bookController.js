const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")


//----------1----------
const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publishername
        if (authorId) {
        if(!publisherId) 
        res.send({msg : "publisher  id is needed" })
    }
    else  
    res.send({msg : " author  id is needed" })
    
   let bookCreated = await bookModel.create(book)
   res.send({msg : bookCreated})
}
//----------------------2--------------------
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}
//--------------------------3-----------------------------
const bookAuthor= async function (req, res) {
       let authorbookpublisher = await bookModel.find().populate('author').populate('publishername')
    res.send({data: authorbookpublisher}) 

}
//------------------------4===================
const attribute= async function(req, res){
    let a=await publisherModel.find({publishername:["Penguin","HarperCollins"]})
    let b=a.map(c=>c._id)
    let d=await bookModel.updateMany({a:{$in:b}},{$set:{isHardCover:true}})
    let e= await bookModel.updateMany({rating:{$gt:3.5}},{$inc:{price:10}})
    res.send({d,e})
    }


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.bookAuthor = bookAuthor
module.exports.attribute = attribute
