import mongoose from "mongoose";

const DrinkSchema = new mongoose.Schema({
    name: {type:String, required:true},
    price: {type: Number, required: true}
}, {timestamps: true})

export default mongoose?.models?.Drink || mongoose.model("Drink", DrinkSchema)