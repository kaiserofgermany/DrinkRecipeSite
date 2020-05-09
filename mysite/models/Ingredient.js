var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IngredientSchema = new Schema(
    {
        name:{type: String, required: true, max: 100},
        alcoholic:{type: Boolean, required: true, max:100}
    }
);

IngredientSchema.virtual("name").get(function(){

if(!this.name)
{
    this.name = "";
}
    return this.name;
});

IngredientSchema.virtual("alcoholic").get(function(){

    if(!this.alcoholic)
    {
        this.alcoholic = true;
    }
        return this.alcoholic;
    });


module.exports = mongoose.model("Drink", DrinkSchema);