import React from 'react'
import  moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({post}) => {
  return (
    <div className='bg-white p-0 lg:p-8 pb-12 mb-8 border border-gray-300'>
        <div className='flex h-72 mb-6 relative'>
          <Image
            layout="fill"
            src={post.featuredImage.url} 
            alt={post.title}
            className="object-cover z-10 inset-0 h-full w-full"
          />
        </div>
        <h1 
          className='transition duration-100 text-center mb-8 
          cursor-pointer hover:text-[#3b10e3] text-3xl font-semibold
          '
        >
          <Link href={`/post/${post.slug}`} passHref={true}>
            {post.title}
          </Link>
        </h1>
        <div className='block lg:flex text-center items-center justify-center mb-5 w-full'>
          <div className='flex justify-center  mb-4 lg:mb-0 lg:w-auto lg:mr-8'>
            <Image
              alt={post.author.name}
              height="30px"
              width="30px"
              className='object-cover align-middle rounded-full'
              src={post.author.photo.url}
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
          </div>
          <div className='font-medium text-gray-700'>
            <svg className='h-6 w-6 inline mr-2' viewBox="0 0 20 20">
							<path d="M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"></path>
						</svg>
            <span>
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </span>
          </div>
        </div>
        <p className='text-center text-md text-grey-700 font-normal px-4 lg:px-2 mb-8'>{post.excerpt}</p>
        <div className='flex justify-center'>
            <div 
              className='transition before:duration-200  transform relative before:absolute  
              hover:before:translate-y-1 hover:before:-translate-x-1 before:w-full before:h-full before:bg-[#10162f]'
            >
              <Link href={`/post/${post.slug}`} passHref={true}>
                <span 
                  className='cursor-pointer transition duration-200 transform hover:-translate-y-1 hover:translate-x-1 
                  inline-block bg-[#3b10e3]  text-lg font-medium  border border-[#10162f]  text-white px-4 py-3 z-20'
                >
                  Continuos Reading
                </span>
              </Link>
            </div>
        </div>

     </div>
        
  )
}


export default PostCard