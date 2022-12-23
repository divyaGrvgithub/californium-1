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
const bookUpdate = async function (req, res) {
    const publisher = await publisherModel.find({name:{$in:[ 'Penguin', 'HarperCollins']}})
    const publisherIds = publisher.map(x=>x._id)
    const updatedData = await bookModel.updateMany({publisher:{$in: publisherIds}}, {$set:{isHardCover:true}})
    const updatedBookPrice = await bookModel.updateMany({ rating: { $gt: 3.5 } }, { $inc: { price: 10 } });
    res.send({update:updatedData,updatedPrice:updatedBookPrice})
}


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.bookAuthor = bookAuthor
module.exports.bookUpdate = bookUpdate
