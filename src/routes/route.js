const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const MemesController= require("../controllers/memesController")
const WeatherController= require("../controllers/weatherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/weatherDetails",WeatherController.getWeather)
router.get("/cowin/districtsInState", CowinController.getDistrictsAndDate) // 
router.post("/memes",MemesController.memesById)
router.post("/cowin/getOtp", CowinController.getOtp)
router.post("/memes",CowinController.getMemes)


module.exports = router;