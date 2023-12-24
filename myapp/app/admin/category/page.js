
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
    <section className='px-8'>
        <div className='max-w-screen-xl bg-white items-center mx-auto p-2 border rounded-lg border-t-transparent'>
        <div
        className='flex justify-around items-center max-w-screen-xl p-6'
        >
        <Search placeholder='Search For Category Name' />
        <div>
        <form
        action={addCategory}
        className='flex mx-auto max-w-screen-sm p-2  rounded-sm'
        >

            <input 
            type='text'
            placeholder='New Name'
            name='name'
            className="pl-8 pr-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 cursor-pointer"
                />
            <SubmitButton 
            className='bg-orange-400 px-1 py-2'>AddCategory</SubmitButton>
        </form>
        </div>
        </div>
        <table className="max-w-screen-xl mx-auto border rounded overflow-hidden leading-normal cursor-pointer">
        <thead className="bg-litePurple text-white border border-liteBlue">
            <tr>
             <th 
              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >Name</th>
         <th 
              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >Update</th>
            </tr>
          </thead>
          <tbody>
          {categories.map((cat) => (
              <tr key={cat.id}>
                <td className='px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200'>
                  <Link href={`/admin/category/${cat.id}`}>
                    {cat.name}
                  </Link>
                </td>
                <td className='px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200'>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
    </section>
  )
}

export default CategoryPage