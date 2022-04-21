import Head from 'next/head'
import { PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services'
import { FeaturePosts } from '../sections'
import Image from 'next/image'

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-4 md:px-6 mb-8">
      <Head>
        <title>Blog React</title>
        <meta name="description" content="Blog react app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='mb-8'>
        <FeaturePosts />
      </div>
      
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        
        <div className='col-span-1 lg:col-span-8'>
          <div className='flex h-72 mb-8 relative'>
            <Image 
              layout="fill"
              alt='publi'
              src='https://img.freepik.com/free-vector/graphic-design-geometric-background_52683-35570.jpg?w=740&t=st=1649795431~exp=1649796031~hmac=2c5d5d6daef36178752a0bb78b9f4065a6a67f5b1628310c6f628d3200ed3613'
              className='object-cover'
            />
          </div>
          {posts.map((post)=>  <PostCard key={post.node.title} post={post.node}/> )}
        </div>
      
        <div className='col-span-1 lg:col-start-9 lg:col-span-4'>
          <div className='lg:sticky top-[16%] '>
            <PostWidget/>
            <Categories/>
            <div className='flex h-72 mb-8 relative'>
              <Image 
                layout="fill"
                alt='publi_2'
                src='https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eWVsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                className='object-cover'
              />
            </div>
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