import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
    image: {type: String},
    name: {type: String},
    desc: {type: String},
    category: {type: mongoose.Types.ObjectId},
}, {timestamps: true})

export default mongoose?.models?.MenuItem || mongoose.model("MenuItem", MenuItemSchema)