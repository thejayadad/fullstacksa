import MenuItem from '@/components/admin/Forms/MenuItem';
import { getMenuItemsWithCategory } from '@/lib/data';
import React from 'react';

const MenuItems = async () => {
  const menuitems = await getMenuItemsWithCategory();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">MenuItems</h2>
      <div className="mx-auto max-w-screen-lg bg-white">
        <table className="min-w-full border rounded overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Update</th>
            </tr>
          </thead>
          <tbody>
            {menuitems.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.category.name}</td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuItems;
