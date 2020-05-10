var express = require('express');
var router = express.Router();
var app = express();


var drink_controller = require("../controllers/drinkController");

/* GET home page. */
router.get('/recipe', function(req, res, next) {
  res.render('recipe', { title: 'Recipe' });
});


router.get("/recipe/:drinkID", drink_controller.drink_details);

module.exports = router;
