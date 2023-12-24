import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String, required: true},
    streetAddress: {type: String},
    postalCode: {type: String},
    city: {type: String},
    state: {type: String},
    phone: {type: String},
    avatar: {type: String},
    // admin: {type: Boolean, default: false},
    favoriteItem:{type: String}
}, {timestamps: true})

export default mongoose?.models?.Profile || mongoose.model("Profile", ProfileSchema)