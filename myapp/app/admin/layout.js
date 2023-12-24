import AdminNav from '@/components/admin/Nav'
import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <section className='px-4 py-8 '>
      <div
      className='flex items-center  gap-6 mt-8 mb-8 justify-center w-full'
      >
              <Link
        href={'/admin/category'}>Categories</Link>
                <Link
        href={'/admin/menuitems'}>MenuItems</Link>
        </div>
        {children}
    </section>
  )
}

export default layout