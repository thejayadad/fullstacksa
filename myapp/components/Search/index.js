'use client'
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { FiSearch } from 'react-icons/fi';

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set('q', e.target.value);
    } else {
      params.delete('q');
    }

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="relative">
      <FiSearch
        className="absolute inset-y-0 left-0 pl-2.5 text-gray-500 pointer-events-none mt-1 cursor-pointer"
        size={30}
      />
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
        className="pl-8 pr-3 py-2 border rounded-md focus:outline-none  focus:border-blue-500 transition-all duration-300"
      />
    </div>
  );
};

export default Search;
