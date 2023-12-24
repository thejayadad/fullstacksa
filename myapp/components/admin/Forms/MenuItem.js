import { SubmitButton } from '@/components/buttons/SubmitButton'
import { addMenuItem } from '@/lib/actions'
import { getCategories } from '@/lib/data'
import React from 'react'

const MenuItem = async () => {
    const categories = await getCategories()
  return (
    <div>
        <form
        className='flex flex-col'
        action={addMenuItem}
        >
            <input 
            type='text'
            placeholder='Name'
            name='name'
            className='flex flex-row p-2'
            />
            <input 
            type='text'
            placeholder='Image'
            name='image'
            className='flex flex-row p-2'
            />
                 <input 
            type='text'
            placeholder='Description'
            name='desc'
            className='flex flex-row p-2'
            />
            <select name='category'>
                {
                    categories?.length > 0 && categories.map(c => (
                        <option key={c._id} value={c._id}>{c.name}</option>
                    ))
                }
            </select>
            <SubmitButton />
        </form>
    </div>
  )
}

export default MenuItem