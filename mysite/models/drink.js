var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DrinkSchema = new Schema(
    {
        name:{type: String, required: true, max: 100},
        discription:{type: String, required: true, max: 1000},
        ingredients: [{type: Schema.Types.ObjectId, ref: "Ingredient"}]
    }
);

DrinkSchema.virtual("name").get(function(){

if(!this.name)
{
    this.name = "";
}
    return this.name;
});

DrinkSchema.virtual("discription").get(function(){

    if(!this.discription)
    {
        this.discription = "";
    }
        return this.discription;
    });

module.exports = mongoose.model("Drink", DrinkSchema);