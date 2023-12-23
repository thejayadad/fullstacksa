

import { SubmitButton } from '@/components/buttons/SubmitButton'
import { updateUser } from '@/lib/actions'
import getServerUser from '@/lib/getServerUser'
import React from 'react'

const ProfilePage = async () => {
    const user = await getServerUser()
    console.log(user) 
    if(!user){
        return <p className='text-center'>No Access</p>
    }
  return (
    <section className='px-4 py-8'>
        <div className='flex flex-col max-w-screen-md mx-auto bg-white p-8'>
          ProfilePage
          <form
          action={updateUser}
          className='flex flex-col'
          >
                  <input type="text" placeholder="username" name="username" />
                  <input type="password" placeholder="password" name="password" />
                  <input type="email" placeholder="Email" name="email" />
                  <input type="text" placeholder="streetAddress" name="streetAddress" />
                  <input type="text" placeholder="Zip Code" name="postalCode" />
                  <input type="text" placeholder="City" name="city" />
                  <input type="text" placeholder="Contact Number" name="phone" />
                  <input type="text" placeholder="Favorite Item" name="favoriteItem" />
                  <input type="text" placeholder="avatar" name="avatar" />
            <SubmitButton />
          </form>
        </div>
    </section>
  )
}

export default ProfilePage