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
    <div className='border border-black mb-8 pb-12 rounded-lg'>
      <h3 className='text-xl mb-6 font-semibold py-3 px-8'>
        Categories
      </h3>
      <div className='px-8 pb-8'>
      {categories.map((category)=> (
        <Link key={category.name} href={`/category/${category.slug}`}>
          <span className='cursor-pointer hover:text-[#3b10e3] transition duration-100 block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>

      ))}
      </div>
    </div>
  )
}

export default Categories