var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DrinkSchema = new Schema(
    {
        name:{type: String, required: true},
        discription:{type: String, required: true},
        ingredients: [{type: Schema.Types.ObjectId, ref: "Ingredient"}]
    }
);
/*
DrinkSchema.virtual("title").get(function(){

if(!this.title)
{
    return "";
}
    return this.title;
});

DrinkSchema.virtual("discription").get(function(){

    if(!this.discription)
    {
        return "";
    }
        return this.discription;
    });
*/
module.exports = mongoose.model("Drink", DrinkSchema);