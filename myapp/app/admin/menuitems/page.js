import MenuItem from '@/components/admin/Forms/MenuItem'
import { getMenuItemsWithCategory } from '@/lib/data'
import React from 'react'

const MenuItems = async () => {
  const menuitems = await getMenuItemsWithCategory();
  return (
    <div>MenuItems
      <MenuItem />
      <div className='mx-auto max-w-screen-lg bg-white'>
      {
        menuitems.map((items) => (
          <div key={items.id}>
            <span>{items.name}</span>
            <span>{items.category.name}</span>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default MenuItems