import React from 'react'
import { Link } from '@inertiajs/react'
const Home = ({ posts }) => {
  console.log(posts);

  return (
      <div className='flex flex-col items-center'>
      <div className='pt-8'>
        {posts.data.map(post => (

          <div key={post.id} className='p-4 border-b'>
            <div className='text-sm text-slate-600'>
              <span>Posted on: </span>
              <span>{ new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className='font-medium'>{post.body}</p>
          </div>
          
        ))}
      </div>
      <div className='py-8 px-4'>
        {posts.links.map(link => (
          link.url ?
          <Link className='px-4 py-2 rounded text-white bg-black m-1' key={link.label} href={link.url} dangerouslySetInnerHTML={{__html: link.label}} />
            :
                        <span className='px-4 py-2 rounded text-white bg-gray-600 m-1' key={link.label} dangerouslySetInnerHTML={{__html: link.label}}></span>

          ))}
      </div>
      </div>
            
  )
}

export default Home