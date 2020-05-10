var express = require('express');
var router = express.Router();

var drink_controller = require("../controllers/drinkController");
var ingredient_controller = require("../controllers/ingredientController");

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'List' });
});

//get list drinks
router.get("/drinks", drink_controller.drink_list);

//get list ingredients
router.get("/ingredients", ingredient_controller.ingredient_list);

module.exports = router;
