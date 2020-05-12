var Drink = require("../models/drink.js");
var async = require ("async");
const {body, validationResult} = require("express-validator/check");
const {sanitizeBody} = require("express-validator/filter");

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
    async.parallel(
        {
            drink: function(callback)
            {
                Drink.findById(req.params.id)
                .populate('name')
                .populate('discription')
                .populate('ingredients')
                .exec(callback);
            },
            function(err,result)
            {
                if(err){return next(err);}
                if(result.drink = null)
                {
                    var err = new Error("Drink not found");
                    err.status = 404;
                    return next(err);

                }
                res.render('drink_detail',{title: results.drink.name,drink:results.drink});
            }
        });
};


//Create Get

exports.drink_create_get = function(req,res) {
    res.send("Not implemented for create post");

};

//Create Post

exports.drink_create_post = function(req,res){
    res.send("Not implemented for create post");
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