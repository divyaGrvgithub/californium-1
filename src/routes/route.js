const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController");
const MiddleWare = require("../middleware/auth");

router.post("/users" , UserController.createUser);
router.post("/login" , UserController.loginUser);
router.get("/users/:userId" , MiddleWare.userValidation , MiddleWare.tokenAuthentication, MiddleWare.tokenAuthorization , UserController.getUserData );
router.put("/users/:userId" , MiddleWare.userValidation , MiddleWare.tokenAuthentication , MiddleWare.tokenAuthorization , UserController.updateUser);
router.delete("/users/:userId" , MiddleWare.userValidation , MiddleWare.tokenAuthentication , MiddleWare.tokenAuthorization , UserController.deleteUser);
router.post("/users/:userId/posts" , MiddleWare.userValidation , MiddleWare.tokenAuthentication , MiddleWare.tokenAuthorization , UserController.postMessage);


module.exports = router;
