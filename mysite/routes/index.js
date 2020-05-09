var express = require('express');

var router = express.Router();
let folder = "C:/Users/Conrad Masak/Documents/DrinkRecipeSite/mysite/static/"

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.sendFile(folder + "home.html");
});

module.exports = router;
