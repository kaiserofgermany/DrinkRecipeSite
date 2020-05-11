var Drink = require("../models/drink.js");

//List drinks

exports.drink_list = function (req,res) {
  
    Drink.find({}, "name")
    
        .populate("name")
        .exec(function(err,list_drinks){
            if(err) {return next(err);}
            res.render('drink_list', { title: 'Drink List', drink_list: list_drinks});
        });
    
};

//Display details

exports.drink_details = function (req,res) {
    res.send("Not Implemented for " + req.params.id);
};


//Create Get

exports.drink_create_get = function (req,res) {
    res.send("Not Implemented for create get");
};

//Create Post

exports.drink_create_post = function (req,res) {
    res.send("Not Implemented for create post");
};

//Delete Get

exports.drink_delete_get = function (req,res) {
    res.send("Not Implemented for delete get");
};

//Delete Post

exports.drink_delete_post = function (req,res) {
    res.send("Not Implemented for delete post");
};

//Update Get

exports.drink_update_get = function (req,res) {
    res.send("Not Implemented for delete get");
};

//Update Post

exports.drink_update_post = function (req,res) {
    res.send("Not Implemented for delete post");
};