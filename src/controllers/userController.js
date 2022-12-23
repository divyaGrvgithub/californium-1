const UserModel= require("../models/userModel")

const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
}
    
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const getIpAdress = async function (req,res) {
    let allUsers1 = await UserModel.find()
    res.send({msg: allUsers1 })
}

const getCurrentTime = async function (req,res){
    let allUsers2 = await UserModel.find()
    res.send ({msg : allUsers2 })
}

const getPath = async function (req,res){
    let allUsers3 = await UserModel.find()
    res.send ({msg: allUsers3 })
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
module.exports.getIpAdress= getIpAdress
module.exports.getCurrentTime= getCurrentTime
module.exports.getPath= getPath 

