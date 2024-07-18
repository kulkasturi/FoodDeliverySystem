import mongoose from "mongoose";

constfoodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:Number,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    categogy: {type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;