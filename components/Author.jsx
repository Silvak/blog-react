import React from 'react'
import Image from 'next/image'


const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 p-8 relative rounded-lg bg-blue-500 bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          alt={author.name}
          unoptimized
          height="80px"
          width="80px"
          className='align-middle rounded-full'
          src={author.photo.url}
        />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>
        {author.name}
      </h3>
      <p className='text-white text-lg'>
        {author.bio}
      </p>
    </div>
  )
}

export default Author