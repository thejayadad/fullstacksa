import db from "./db";
import Profile from "@/models/Profile";
import Category from "@/models/Category";
import MenuItem from "@/models/MenuItem";
import Drinks from "@/models/Drink";

//GET ALL DRINKS
export const getDrinks = async (q)=> {
  const regex = new RegExp(q, "i");
  try {
    db.connect()
    const drinks = await Drinks.find({ name: { $regex: regex } })
    return drinks
  } catch (error) {
    throw new Error("Failed to fetch drinks!");

  }
}

//CATEGORIES//
export const getCategories = async (q) => {
    console.log(q)
    const regex = new RegExp(q, "i");

    try {
        db.connect()
        const categories = await Category.find({ name: { $regex: regex } })
        return categories
    } catch (error) {
        throw new Error("Failed to fetch categories!");

    }
}

//GET MENU ITEMS & CATEGORY
export const getMenuItemsWithCategory = async () => {
    try {
      db.connect();
  
      const menuItemsWithCategory = await MenuItem.aggregate([
        {
          $lookup: {
            from: 'categories',
            localField: 'category',
            foreignField: '_id',
            as: 'categoryInfo',
          },
        },
        {
          $unwind: '$categoryInfo',
        },
        {
          $project: {
            _id: 1,
            name: 1,
            category: {
              _id: '$categoryInfo._id',
              name: '$categoryInfo.name',
            },
          },
        },
      ]);
  
      console.log("MenuItemsWithCategory: ", menuItemsWithCategory);
  
      return menuItemsWithCategory;
    } catch (error) {
      throw new Error('Failed to fetch MenuItems!');
    }
  };
      

export const fetchProfileByEmail = async (email) => {
    try {
        db.connect()
        const profile = await Profile.findOne({email: email})
        return profile
        
    } catch (error) {
        throw new Error("Failed to fetch Profile!");

    }
}