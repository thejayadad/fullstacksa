import Search from '@/components/Search'
import { SubmitButton } from '@/components/buttons/SubmitButton'
import { addDrinks } from '@/lib/actions'
import { getDrinks } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const DrinksPage = async () => {
    const drinks = await getDrinks()

    return (
        <section className='px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48'>
            <div className='max-w-screen-xl bg-white mx-auto p-4 md:p-8 border rounded-lg border-t-transparent'>
                <div className='flex flex-col md:flex-row justify-around items-center max-w-screen-xl'>
                    <Search placeholder='Search For Drink Name' />
                    <div className='mt-4 md:mt-0'>
                        <form action={addDrinks} className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <div className='flex gap-4'>
                        <input
                                type='text'
                                placeholder='Name'
                                name='name'
                                className='pl-4 pr-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 cursor-pointer'
                            />
                            <input
                                type='number'
                                placeholder='Price'
                                name='price'
                                className='pl-4 pr-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition-all duration-300 cursor-pointer'
                            />
                        </div>
                            <SubmitButton className='bg-orange-400 px-2 py-2 md:py-0'>AddCategory</SubmitButton>
                        </form>
                    </div>
                </div>
                {/* GET ALL DRINKS IN TABLE */}
                <table className="max-w-screen-xl mx-auto border rounded overflow-hidden leading-normal cursor-pointer mt-6">
                <thead className="bg-litePurple text-white border border-liteBlue">
                    <tr>
                    <th 
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >Name</th>
                      <th 
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >Price</th>
                <th 
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drinks.map((drink) => (
                            <tr key={drink.id}>
                            <td className='px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200'>
                              <Link href={`/admin/category/${drink.id}`}>
                                {drink.name}
                              </Link>
                      
                            </td>
                            <td className='px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200'>
                              <Link href={`/admin/category/${drink.id}`}>
                                ${drink.price}
                              </Link>
                              </td>
                            <td className='px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200'>
                              <button className='bg-liteBlue text-white px-4 py-2 rounded'>
                                Update
                              </button>
                            </td>
                          </tr>
                        ))
                    }
                </tbody>

                </table>
            </div>
        </section>
    )
}

export default DrinksPage
