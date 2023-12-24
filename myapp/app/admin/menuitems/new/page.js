import MenuItem from '@/components/admin/Forms/MenuItem'
import Link from 'next/link'
import React from 'react'

const NewMenuItem = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-screen-2xl p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">NewMenuItem</h2>
    <MenuItem />

        <Link 
        href={'/admin/menuitems/'}
        className='text-center'>BACK</Link>        
        </div>        
    </div>
  )
}

export default NewMenuItem