import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import Logo from '../public/Logo.svg'
import Image from 'next/image'


const Header = () => {
  const [categories, setCategories] =  useState([]);

  useEffect(()=>{
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='sticky top-0 z-50 mb-8 md:px-8 px-6 py-2 border-b border-black bg-white'>
        <div className='flex md:w-full justify-between'>
            <div className='md:float-left flex'>
                <Image
                    height="50px" 
                    width="50px" 
                    src={Logo} alt="SVG as an image"
                />
                <Link href="/" passHref={true}>
                    <span className='m-auto pl-1 cursor-pointer font-bold text-3xl text-black hover:text-[#3b10e3] transition duration-100'>
                        Borealis
                    </span>
                </Link>
            </div>
            <div className='hidden md:inline-block my-auto'>
                    {categories.map((category)=>(
                        <Link key={category.slug} href={`/category/${category.slug}`} passHref={true}>
                            <span className='p-2 text-black font-semibold cursor-pointer border border-white hover:border-[#3b10e3]  hover:text-[#3b10e3] transition duration-100'>
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