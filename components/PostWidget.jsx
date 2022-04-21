import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'


const PostWidget = ({categories, slug}) => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    if(slug){
      getSimilarPosts(categories, slug)
        .then((result) => setPosts(result))
    } else{
      getRecentPosts(categories, slug)
        .then((result) => setPosts(result))
    }
  }, [slug]);

  return (
    <div className='relative bg-white borde mb-8 border border-[#0f1630] h-72'>
      <h3 className='text-xl mb-6  w-full  border-b-[#0f1630] bg-indigo-600  text-[#0f1630] px-8 py-2 font-semibold border-b'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      <div className='absolute top-3 right-5'>X</div>
      
      <div className='px-8 pb-4'>

        {posts.map((post) =>(
          <Link href={`/post/${post.slug}`} key={post.title} passHref={true} className="text-md">
            <div key={post.title} className="flex items-center w-full h-14 mb-3 cursor-pointer border-l-4 border-white hover:border-indigo-600 hover:bg-indigo-100 overflow-hidden">
              <div className='w-14 h-14 flex min-w-[56px]'>
                <Image 
                  unoptimized
                  height={56}
                  width={56}
                  alt={post.title}
                  className='object-cover align-middle'
                  src={post.featuredImage.url}
                />
              </div>

              <div className='flex-grow text-sm ml-4'>
                <p className='test-gray-500 font-sm'>
                  {moment(post.createdAt).format('DD MMM, YYYY')}
                </p>
                {post.title}
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default PostWidget