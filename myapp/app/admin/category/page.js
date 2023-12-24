import Search from '@/components/Search'
import { SubmitButton } from '@/components/buttons/SubmitButton'
import { addCategory } from '@/lib/actions'
import { getCategories } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const CategoryPage = async ({searchParams}) => {
    const q = searchParams?.q || "";
    const categories = await getCategories(q)

  return (
    <section className='px-4 py-8'>
        <div className='max-w-screen-lg items-center mx-auto p-2'>
            <h2 className='text-center'>Search</h2>
            <Search placeholder='Search' />
        <div className=''>
        <form
        action={addCategory}
        className='flex mx-auto max-w-screen-sm p-4 border border-litePurple rounded-md'
        >

            <input 
            type='text'
            placeholder='Category Name'
            name='name'
            className='flex flex-row p-2'
            />
            <SubmitButton 
            className='bg-orange-400 px-2 py-4'>Submit</SubmitButton>
        </form>
        </div>
        <h2 className='mt-8 text-center'>All Categories</h2>
        { 
            categories.map((cat) => (
                <div key={cat.id}>
                    <Link href={`/admin/category/${cat.id}`}>
                        {cat.name}
                    </Link> 
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default CategoryPage