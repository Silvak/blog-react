import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/Logo.svg'
import { getCategories } from '../services'


const footer = () => {
  const [categories, setCategories] =  useState([]);

  useEffect(()=>{
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <footer className=' border-t border-black mt-20 w-full px-12'>
        
        <div className='grid grid-cols-1 lg:grid-cols-12 my-8 gap-8'>
          <section className='col-span1 md:col-span-3'>
              <div className='flex'>
              <Image
                  className='min-w-[50px]'
                  height="50px" 
                  width="50px" 
                  src={Logo} alt="SVG as an image"
              />
              <span className='relative pl-1 pt-2 font-bold text-3xl text-black'>
                  Borealis
                  <span className='absolute bottom-[-4px] pl-[2px] block text-sm text-black'>
                    science & tech
                  </span>
              </span>
            </div>
            <div className='border mt-4'>
              d
            </div>
          </section>
          
          <section className='col-span1 md:col-span-3 h-70 lg:border-r lg:border-r-black '>
            <h5 className='mb-2 font-bold'>RESOURCES</h5>
            <ul>
              <li className='my-1'>
                <a href='a' className='text-md hover:border-[#3b10e3]   hover:text-[#3b10e3] transition duration-100'>
                  Lorem
                </a>
              </li>
              <li className='my-1'>
                <a href='a' className='text-md hover:border-[#3b10e3]   hover:text-[#3b10e3] transition duration-100'>
                  Lorem
                </a>
              </li>
              <li className='my-1'>
                <a href='a' className='text-md hover:border-[#3b10e3]   hover:text-[#3b10e3] transition duration-100'>
                  Lorem
                </a>
              </li>
            </ul>
          </section>
          

          <section className='h-[90%] col-span1 md:col-span-3 pt-6 lg:pt-0 lg:border-none  border-t border-t-black'>
            <h5 className='mb-2 font-bold'>CATEGORIES</h5>
            {categories.map((category)=> (
              <Link key={category.name} href={`/category/${category.slug}`}>
                <span className='cursor-pointer hover:text-[#3b10e3] transition duration-100 block my-1'>
                  {category.name}
                </span>
              </Link>
            ))}
          </section>

          <section className='col-span1 md:col-span-3 h-70'>
            <h5 className='mb-2 font-bold'>LINK</h5>
          </section>
        </div>



        <section className='flex w-[100%] justify-between pointer w-full border-t border-t-black py-4'>
          <div className='mr-4'>Privacy Policy  |  Cookie Policy  |  Terms</div>
          <p>{' <3 @Silvak '}</p>
        </section>
    </footer>
  )
}

export default footer

/**
              
 */