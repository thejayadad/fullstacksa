

import { SubmitButton } from '@/components/buttons/SubmitButton'
import { updateUser } from '@/lib/actions'
import { fetchProfileByEmail } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import React from 'react'

const ProfilePage = async () => {
    const user = await getServerUser()
    const findProfile = await fetchProfileByEmail(user.email)
    
    console.log("User" + user.email) 
    if(!user){
        return <p className='text-center'>No Access</p>
    } 
  return (
    <section className='px-4 py-8'>
        <div className='flex flex-col max-w-screen-md mx-auto bg-white p-8'>
          ProfilePage

        </div>  
    </section>
  )
}

export default ProfilePage