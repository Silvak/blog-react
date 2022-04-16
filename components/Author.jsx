import React from 'react'
import Image from 'next/image'


const Author = ({author}) => {
  return (
    <div className='mt-8 mb-12 border border-[#fef0e5]'
    style={{ backgroundImage: `url('https://images.vexels.com/media/users/3/157944/isolated/preview/b6a72d46f16e457ccfacf410edc462a6-dots-grid-design.png')` }}
    >
      <div className='flex p-2 m-8 lg:m-14 bg-[#fef0e5]'>
        <div className='w-20 h-20  p-2 border border-[#0f1630]' style={{minWidth:"64px"}}>
            <img
              alt={author.name}
              src={author.photo.url}
              className='object-containt align-middle'
            /> 
        </div>
        <p className='m-auto pl-4 text-sm lg:text-md'>
          <span className='text-left text-lg font-bold block mb-2'>
            {author.name}
          </span>
          {author.bio}
        </p>
      </div>
    </div>
  )
}

export default Author