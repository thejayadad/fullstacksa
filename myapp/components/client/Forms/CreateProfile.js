import React from 'react'
import { updateUser } from '@/lib/actions'
import { SubmitButton } from '@/components/buttons/SubmitButton'
import { SubmitButton } from '@/components/buttons/SubmitButton'

const CreateProfile = () => {
  return (
    <div>
        <form
          action={updateUser}
          className='flex flex-col'
          >
                  <input type="text" placeholder="Username" name="username" />
                  <input type="text" placeholder="streetAddress" name="streetAddress" />
                  <input type="text" placeholder="Zip Code" name="postalCode" />
                  <input type="text" placeholder="City" name="city" />
                  <input type="text" placeholder="State" name="state" />
                  <input type="text" placeholder="Contact Number" name="phone" />
                  <input type="text" placeholder="Favorite Item" name="favoriteItem" />
                  <input type="text" placeholder="avatar" name="avatar" />
            <SubmitButton />
          </form>
    </div>
  )
}

export default CreateProfile