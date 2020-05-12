var express = require('express');
var router = express.Router();
let folder = "C:/Users/Conrad Masak/Documents/DrinkRecipeSite/mysite/static/"

var drink_controller = require("../controllers/drinkController");
var ingredient_controller = require("../controllers/ingredientController");


/* GET submit page. */
router.get('/', function(req, res, next) {
  res.sendFile(folder + "submit.html")
});


//get add ingredient
router.get("/ingredient/create", ingredient_controller.ingredient_create_get);

//post add ingredient
router.post("/ingredient/create", ingredient_controller.ingredient_create_post);

//get add drink
router.get("/drink/create", drink_controller.drink_create_get);

//post add drink
router.post("/drink/create", drink_controller.drink_create_post);

//get update ingredient
router.get("/ingredient/update/:ingredientID", ingredient_controller.ingredient_update_get);

//post update ingredient
router.post("/ingredient/update/:ingredientID", ingredient_controller.ingredient_update_post);

//get update drink
router.get("/drink/update/:drinkID", drink_controller.drink_update_get);

//post update drink
router.post("/drink/update/:drinkID", drink_controller.drink_update_post);

//get delete ingredient
router.get("/ingredient/delete/:ingredientID", ingredient_controller.ingredient_delete_get);

//post delete ingredient
router.post("/ingredient/delete/:ingredientID", ingredient_controller.ingredient_delete_post);

//get delete drink
router.get("/drink/delete/:drinkID", drink_controller.drink_delete_get);

//post delete drink
router.post("/drink/delete/:drinkID", drink_controller.drink_delete_post);

module.exports = router;
