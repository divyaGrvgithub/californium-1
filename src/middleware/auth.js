const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const userValidation = async function(req , res , next){
  let userId = req.params.userId;
  let userDetails = await UserModel.findById(userId);
  if(!userDetails){
    return res.send({status:false , msg:"No such user exists with this ID."});
  }else{
    next();
  }
}

const tokenAuthentication = function(req , res , next){
    let token = req.headers["x-auth-token"];
  if(!token){
    return res.send({status:false , msg:"the header token is required."});
  }
  
  let decoded = jwt.verify(token , "functionup-californium-very-very-secret-key");
  if(!decoded){
    return res.send({status:false , msg:"Invalid token id."});
  }

  next();
}

const tokenAuthorization = function(req , res , next){
  let token = req.headers["x-auth-token"];
  if(!token){
    return res.send({status:false , msg:"the header token is required."});
  }

  let decoded = jwt.verify(token , "functionup-californium-very-very-secret-key")
  if(!decoded){
    return res.send({status: false , msg:"Invalid token ID"});
  }

  if(decoded.userId != req.params.userId){
    return res.send({status : false , msg : "The loggdin user is not authorized."})
  }

  next();
}

module.exports.userValidation = userValidation;
module.exports.tokenAuthentication = tokenAuthentication;
module.exports.tokenAuthorization = tokenAuthorization;