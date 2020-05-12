var Ingredient = require("../models/ingredient.js");
const validator = require("express-validator");

//List ingredient

exports.ingredient_list = function (req,res) {
    Ingredient.find({}, "name")
    
    .populate("name")
    .exec(function(err,list_ingredients){
        if(err) {return next(err);}
        res.render('ingredient_list', { title: 'Ingredient List', ingredient_list: list_ingredients});
    });
};

//Display details

exports.ingredient_details = function (req,res) {
    async.parallel(
        {
            ingredient: function(callback)
            {
                Ingredient.findById(req.params.id)
                .populate('name')
                .populate('alcoholic')
                .exec(callback);
            },
            function(err,result)
            {
                if(err){return next(err);}
                if(result.ingredient = null)
                {
                    var err = new Error("Ingredient not found");
                    err.status = 404;
                    return next(err);

                }
                res.render('ingredient_detail',{title: results.ingredient.name,ingredient:results.ingredient});
            }
        });
};


//Create Get

exports.ingredient_create_get = function (req,res) {
    res.render("ingredient_form", {title:"Create Ingredient"});
};

//Create Post

exports.ingredient_create_post = [
        validator.body('name',"Ingredient name is required").trim().isLength({min: 1}),

        validator.sanitizeBody('name').escape(),
        validator.sanitizeBody('alcoholic').toBoolean(),

        (req,res,next) => {
            const errors = validator.validationResult(req);

            var ingredient = new Ingredient ({name: req.body.name, alcoholic: req.body.alcoholic});

            if(!errors.isEmpty())
            {
                res.render('ingredient_form',{title: 'Create Ingredient', ingredient: ingredient, errors: errors.array()});
                return;
            }
            else
            {

                Ingredient.findOne({'name' : req.body.name})
                    .exec (function(err, found_ingredient){
                        if(err){return next(err);}
                        if(found_ingredient)
                        {
                            res.redirect(found_ingredient.url);
                        }
                        else
                        {
                            ingredient.save(function(err) {
                                if(err){return next(err);}
                                res.redirect(ingredient.url);
                            });
                        }
                      
                    })
                    

            }
        }
];

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