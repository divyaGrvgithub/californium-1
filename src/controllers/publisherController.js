const pModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let bookCreated = await pModel.create(publisher)
    res.send({data: bookCreated})
}
const getPublisher= async function (req, res) {
    let books = await pModel.find()
    res.send({data: books})
}

module.exports.createPublisher = createPublisher
module.exports.getPublisher = getPublisher