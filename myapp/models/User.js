import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    streetAddress: {type: String},
    postalCode: {type: String},
    city: {type: String},
    avatar: {type: String},
    phone: {type: String},
    favoriteItem:{type: String}
}, {timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)