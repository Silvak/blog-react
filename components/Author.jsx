import React from 'react'
import Image from 'next/image'


const Author = ({author}) => {
  return (
    <div className='mt-8 mb-12 border border-black bg-[#ffd300] '
    style={{ backgroundImage: `url('')` }}
    >
      <div className='flex p-2 m-8 lg:m-12 bg-white border border-black'>
        <div className='w-20 h-20  p-2 border border-[#0f1630] min-w-[64px]'>
            <Image
              width={64}
              height={64}
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