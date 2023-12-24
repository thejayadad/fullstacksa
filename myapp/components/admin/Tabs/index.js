'use client'
import { useState } from 'react';
import Link from 'next/link';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    return (
        <div 
        className='flex flex-wrap text-sm font-medium text-center text-gray-500 max-w-screen-lg mx-auto justify-center gap-4'
        >
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer inline-block p-4 text-gray-800 bg-white rounded-t-lg  ${
            index === activeTab ? 'text-blue-500 bg-mustard p-2' : 'text-gray-500'
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}

export default Tabs