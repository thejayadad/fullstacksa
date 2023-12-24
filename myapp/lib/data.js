import db from "./db";
import Profile from "@/models/Profile";
import Category from "@/models/Category";


//CATEGORIES//
export const getCategories = async () => {
    try {
        db.connect()
        const categories = await Category.find({})
        return categories
    } catch (error) {
        throw new Error("Failed to fetch categories!");

    }
}


export const fetchProfileByEmail = async (email) => {
    try {
        db.connect()
        const profile = await Profile.findOne({email: email})
        return profile
        
    } catch (error) {
        throw new Error("Failed to fetch Profile!");

    }
}