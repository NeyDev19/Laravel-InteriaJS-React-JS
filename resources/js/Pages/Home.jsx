import React from 'react'
import { Link } from '@inertiajs/react'
const Home = ({ posts }) => {
  console.log(posts);

  return (
      <>
      <div>
        {posts.map(post => (

          <div key={post.id} className='p-4 border-b'>
            <div className='text-sm text-slate-600'>
              <span>Posted on: </span>
              <span>{ new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className='font-medium'>{post.body}</p>
          </div>
          
        ))}
      </div>
      </>
            
  )
}

export default Home