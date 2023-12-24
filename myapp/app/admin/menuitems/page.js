import MenuItem from '@/components/admin/Forms/MenuItem';
import { getMenuItemsWithCategory } from '@/lib/data';
import React from 'react';

const MenuItems = async () => {
  const menuitems = await getMenuItemsWithCategory();

  return (
    <div className='bg-white px-4 mx-auto max-w-screen-xl border border-gray-200 shadow-sm'>
      <div className="mx-auto max-w-screen-lg py-8 bg-white">
        <table className="min-w-full border rounded overflow-hidden leading-normal cursor-pointer">
          <thead className="bg-litePurple text-white border border-liteBlue">
            <tr>
            <th 
              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >Image</th>
              <th 
              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >Name</th>
          
              <th 
              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >Category</th>
              <th 
              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >Update</th>
            </tr>
          </thead>
          <tbody>
            {menuitems.map((item) => (
              <tr key={item._id} className="border-b items-cener">
                <td 
                className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                >
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <span
                      className='relative block'
                      >
                      <img
                        src={item.image}
                        className='mx-auto object-cover rounded-full h-10 w-10 '
                      />
                      </span>
                    </div>
                  </div>
                
                </td>
                <td
                 className="text-gray-900 whitespace-no-wrap"
                >{item.name}</td>
                <td 
                 className="text-gray-900 whitespace-no-wrap"
                 >{item.category.name}</td>
                <td 
                 className="text-gray-900 whitespace-no-wrap"
                 >
                  <button className="bg-mustard hover:bg-liteBlue text-white font-bold py-2 px-4 rounded">
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
