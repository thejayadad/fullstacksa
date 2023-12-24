import mongoose from "mongoose";

const ExtraItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });


const MenuItemSchema = new mongoose.Schema({
    name: {type: String},
    desc: {type: String},
    price: {type: Number},
    drink: [{ type: mongoose.Schema.Types.ObjectId, ref: "Drink" }],
    extras: {type: [ExtraItemSchema]},
    category: {type: mongoose.Types.ObjectId},
}, {timestamps: true})

export default mongoose?.models?.MenuItem || mongoose.model("MenuItem", MenuItemSchema)