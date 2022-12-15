const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    tags: [String],
    
    isPublished: String,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stockAvailable : String,
    totalPages : String,
    year : Number
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema)