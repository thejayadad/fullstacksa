'use server' 
import db from "./db"
import User from "@/models/User"
import getServerUser from "./getServerUser"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const updateUser = async (formData) => {
    const {username, email, streetAddress, postalCode, city, phone, favoriteItem, avatar, password} = 
    Object.fromEntries(formData)
    const activeUser = await getServerUser()
    console.log("Active User " + activeUser)
    const id = activeUser.id
    try {
        db.connect()
        const updateUserFields = {
            username, email, streetAddress, postalCode, city, phone, favoriteItem, avatar, password,  
        }
        Object.keys(updateUserFields).forEach(
            (key) =>
              (updateUserFields[key] === "" || undefined) && delete updateUserFields[key]
          );
          await User.findByIdAndUpdate(id, updateUserFields)
    } catch (error) {
        throw new Error("Failed to update user! " + error);

    }
    revalidatePath("/");
    redirect("/");

}

