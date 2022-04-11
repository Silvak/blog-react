import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'


const Header = () => {
  const [categories, setCategories] =  useState([]);

  useEffect(()=>{
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='sticky top-0 z-50 mb-12 px-8 border-b border-black bg-white'>
        <div className=' inline-block w-full py-4'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-3xl text-black hover:text-[#3b10e3] transition duration-100'>
                        Blog React
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category)=>(
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer hover:text-[#3b10e3] transition duration-100'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header