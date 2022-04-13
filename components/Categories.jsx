import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = ({posts}) => {
  const [categories, setCategories] =  useState([]);

  useEffect(()=>{
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='relative bg-[#0f1630] mb-8 pb-4 text-white'>
      <h3 className='text-xl font-semibold py-2 px-8'>
        Categories
      </h3>
      <div className='absolute top-3 right-5'>X</div>
      <div className='px-8 py-2 border-y text-green-300' >
      {categories.map((category)=> (
        <Link key={category.name} href={`/category/${category.slug}`}>
          <span className='cursor-pointer hover:text-[#3b10e3] transition duration-100 block py-2'>
            {category.name}
          </span>
        </Link>

      ))}
      </div>
    </div>
  )
}

export default Categories