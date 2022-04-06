import Head from 'next/head'
import { PostCard, Categories, PostWidget} from '../components'
import { getPosts } from '../services'


export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-200">
      <Head>
        <title>Blog React</title>
        <meta name="description" content="Blog react app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='grid grid-cols-2 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post)=>  <PostCard key={post.node.title} post={post.node}/> )}
        </div>
      

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relatave top-8'>
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