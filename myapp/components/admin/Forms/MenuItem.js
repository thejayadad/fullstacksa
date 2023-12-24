import { SubmitButton } from '@/components/buttons/SubmitButton'
import { addMenuItem } from '@/lib/actions'
import { getCategories, getDrinks } from '@/lib/data'
import React from 'react'

const MenuItem = async () => {
    const categories = await getCategories()
    const drinks = await getDrinks()
  return (
    <div className='max-w-screen-xl'>
        <form
        className='flex flex-col gap-4'
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
            placeholder='Description'
            name='desc'
            className='flex flex-row p-2 mb-2'
            />
            <input 
            type='number'
            placeholder='Price'
            name='price'
            className='flex flex-row p-2 mb-2'
            />
                {drinks?.length > 0 &&
                drinks.map((d) => (
                    <div key={d._id} className='flex items-center mb-2'>
                    <input
                        type='checkbox'
                        id={`drink-${d._id}`}
                        name='drink'
                        value={d._id}
                        className='mr-2'
                    />
                    <label htmlFor={`drink-${d._id}`}>
                        <div className='flex flex-col items-center'>
                        <span className='text-gray-800'>{d.name}</span>
                        <span className='text-gray-500'>{`$${d.price.toFixed(2)}`}</span>
                        </div>
                    </label>
                    </div>
                ))}


            <select className='mb-6 p-4' name='category'>
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