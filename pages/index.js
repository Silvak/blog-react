import Head from 'next/head'
import { PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services'
import { FeaturePosts } from '../sections'

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-6 mb-8">
     
      <FeaturePosts />
      
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        
        <div className='col-span-1 lg:col-span-8'>
          <div className='w-full h-72 bg-[#ffd300] mb-8'>
            <img 
              src='https://img.freepik.com/free-vector/graphic-design-geometric-background_52683-35570.jpg?w=740&t=st=1649795431~exp=1649796031~hmac=2c5d5d6daef36178752a0bb78b9f4065a6a67f5b1628310c6f628d3200ed3613'
              className='object-cover w-full h-full'
            />
          </div>
          {posts.map((post)=>  <PostCard key={post.node.title} post={post.node}/> )}
        </div>
      
        <div className='col-span-1 lg:col-start-9 lg:col-span-4'>
          <div className='relative lg:sticky top-[16%]'>
            <PostWidget/>
            <Categories/>
          </div>
        </div>
        
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const posts = (await getPosts()) || [];
  return {
    props: {posts}
  }
}