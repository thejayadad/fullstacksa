'use client'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div className='flex items-center justify-around mx-auto max-w-screen-md  border rounded-full p-4'>
        <Link
        className={`link bg-orange-400 rounded-full p-4 ${pathname === '/admin/category' ? ' bg-red-500' : ''}`} 
        href={'/admin/category'}>Categories</Link>
                <Link
        className={`link ${pathname === '/admin/menuitems' ? 'active' : ''}`} 
        href={'/admin/menuitems'}>MenuItems</Link>
    </div>
  )
}

export default Navbar