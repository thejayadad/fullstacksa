import React from 'react'
import Navbar from '@/components/admin/Nav'

const layout = ({children}) => {
  return (
    <section className='px-4 py-8'>
          <Navbar />  
        {children}
    </section>
  )
}

export default layout