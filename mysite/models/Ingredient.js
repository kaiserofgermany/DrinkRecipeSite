var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema(
    {
        name:{type: String, required: true},
        alcoholic:{type: Boolean, required: true}
    }
);
/*
IngredientSchema.virtual("name").get(function(){

if(!this.name)
{
    return "";
}
    return this.name;
});

IngredientSchema.virtual("alcoholic").get(function(){

    if(!this.alcoholic)
    {
       return true;
    }
        return this.alcoholic;
    });
*/

module.exports = mongoose.model("Ingredient", IngredientSchema);