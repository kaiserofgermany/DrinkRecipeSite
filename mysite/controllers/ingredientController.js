var Ingredient = require("../models/ingredient");

//List ingredient

exports.ingredient_list = function (req,res) {
    res.send("Not Implemented");
};

//Display details

exports.ingredient_details = function (req,res) {
    res.send("Not Implemented for " + req.params.id);
};


//Create Get

exports.ingredient_create_get = function (req,res) {
    res.send("Not Implemented for create get");
};

//Create Post

exports.ingredient_create_post = function (req,res) {
    res.send("Not Implemented for create post");
};

//Delete Get

exports.ingredient_delete_get = function (req,res) {
    res.send("Not Implemented for delete get");
};

//Delete Post

exports.ingredient_delete_post = function (req,res) {
    res.send("Not Implemented for delete post");
};

//Update Get

exports.ingredient_update_get = function (req,res) {
    res.send("Not Implemented for delete get");
};

//Update Post

exports.ingredient_update_post = function (req,res) {
    res.send("Not Implemented for delete post");
};