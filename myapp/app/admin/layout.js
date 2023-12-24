import Tabs from '@/components/admin/Tabs'
import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  const categoriesTab = <Link href='/admin/category'>Categories</Link>;
  const menuItemsTab = <Link href='/admin/menuitems'>MenuItems</Link>;
  const drinksTab = <Link href='/admin/drinks'>Drinks</Link>;

  return (
    <section className='px-4 py-8 '>
      <Tabs tabs={[categoriesTab, menuItemsTab, drinksTab]} />
        {children}
    </section>
  )
}

export default layout