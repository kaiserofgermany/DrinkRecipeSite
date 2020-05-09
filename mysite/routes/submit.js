var express = require('express');
var router = express.Router();
let folder = "C:/Users/Conrad Masak/Documents/DrinkRecipeSite/mysite/static/"
/* GET submit page. */
router.get('/submit', function(req, res, next) {
  res.sendFile(folder + "submit.html")
});

module.exports = router;
