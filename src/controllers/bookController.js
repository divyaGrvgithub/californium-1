const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")


//----------1----------
const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publishername
        if (authorId) {
        if(!publisherId) res.send({msg : "publisher  id is needed" })
    }
    else  res.send({msg : " author  id is needed" })
    
   let bookCreated = await bookModel.create(book)
   res.send({msg : bookCreated})
}
//----------------------2--------------------
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}
//--------------------------3
const bookAuthor= async function (req, res) {
       let authorbookpublisher = await bookModel.find().populate('author').populate('publishername')
    res.send({data: authorbookpublisher})

}
//------------------------4===================
const attribute= async function(req, res){
    let a=await publisherModel.find({publishername:["Penguin","HarperCollins"]}).select({_id:1});
    let b=await bookModel.find({publishername:b}).select({_id:1});
    for (let index = 0; index < b.length; index++) {
        const element = attribute[index];
        let newentry=await bookModel.findByIdAndUpdate(element,{$set:{isHardCover:true}})

        console.log(newentry)
    }
    res.send("Check the console")
}
///-----------------------------------last--------
const update=async function(req, res){

    let key = await authorModel.find({ rating:{$gt:3.5}}).select({_id:1});
    let books=await bookModel.find({author:key}).select({_id:1})
    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        let update= await bookModel.findByIdAndUpdate(element,{$inc:{price:10}}, {new:true})
        console.log(update)
        
    }
    res.send("Check the console")
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.bookAuthor = bookAuthor
module.exports.attribute = attribute
module.exports.update = update
