import Link from 'next/link'
import React from 'react'

const AdminNav = () => {
  return (
    <div
    className='flex justify-center mx-auto max-w-screen-md'
    >
        <Link href={'/admin/category'}>
            Category
        </Link>
    </div>
  )
}

export default AdminNav