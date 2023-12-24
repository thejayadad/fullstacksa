'use server' 
import db from "./db"
import getServerUser from "./getServerUser"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Profile from "@/models/Profile";
import Category from "@/models/Category";
import MenuItem from "@/models/MenuItem";
import Drinks from "@/models/Drink";

//DRINKS
export const addDrinks = async (formData) => {
  const { name, price} = 
  Object.fromEntries(formData)
  try {
    db.connect()
    const newDrinks = new Drinks({
      name,
      price
    })
    await newDrinks.save()
  } catch (error) {
    throw new Error("Failed to create drinks " + error);

  }
  revalidatePath("/admin/category");
  redirect("/admin/category");

}

//MENUITEMS
export const addMenuItem = async (formData) => {
  const { name,  desc, price, drink, extras, category} = 
    Object.fromEntries(formData)
    try {
      db.connect()
      const newMenuItem = new MenuItem({
        name,
        desc,
        category,
        drink,
        extras,
        price
      })
      await newMenuItem.save()
    } catch (error) {
      throw new Error("Failed to create menuItem " + error);

    }
    revalidatePath("/admin/menuitems");
    redirect("/admin/menuitems ");
}

//CATEGORIES//
export const addCategory = async (formData) => {
  const { name} = 
    Object.fromEntries(formData)
    try {
      db.connect()
      const newCategory = new Category({
        name
      })
      await newCategory.save()
    } catch (error) {
      throw new Error("Failed to create category " + error);

    }
    revalidatePath("/admin/category");
    redirect("/admin/category");

}


export const updateUser = async (formData) => {
    const { username, streetAddress, postalCode, city, state, phone, favoriteItem, avatar,} = 
    Object.fromEntries(formData)
    const activeUser = await getServerUser()
    const email = activeUser.email
    console.log("Email " + email)
    try {
        db.connect()
        
        const existingProfile = await Profile.findOne({ email });

        if (existingProfile) {
          // Update the existing profile
          const updateFields = {
            username,
            streetAddress,
            postalCode,
            city,
            state,
            phone,
            favoriteItem,
            avatar,
          };
    
          // Remove empty or undefined fields
          Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === '' || updateFields[key] === undefined) && delete updateFields[key]
          );
    
          // Update the existing profile
          await Profile.findOneAndUpdate({ email }, updateFields);
        } else {
          // Create a new profile if it doesn't exist
          const newProfile = new Profile({
            email,
            username,
            streetAddress,
            postalCode,
            city,
            state,
            phone,
            favoriteItem,
            avatar,
          });
    
          await newProfile.save();
        }
          
        } catch (error) {
        throw new Error("Failed to update user! " + error);

    }
    revalidatePath("/");
    redirect("/");

}


export const updatedUser = async (formData) => {
    const { username, streetAddress, postalCode, city, state, phone, favoriteItem, avatar,} = 
    Object.fromEntries(formData)
    const activeUser = await getServerUser()
    const email = activeUser.email
    console.log("Email " + email)
    try {
        db.connect()
        const existingUser = await Profile.findOne({ email });

            if (existingUser) {
            throw new Error('Profile with this email already exists');
            }
             
          const newProfile = new Profile ({
            email: activeUser.email, username, streetAddress, postalCode, city, state, phone, favoriteItem, avatar
          })
          await newProfile.save()
        } catch (error) {
        throw new Error("Failed to update user! " + error);

    }
    revalidatePath("/");
    redirect("/");

}


