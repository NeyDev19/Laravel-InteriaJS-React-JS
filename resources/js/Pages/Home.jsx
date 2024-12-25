import React from 'react'
import { Link } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'
import { useState } from 'react'
import { Head } from '@inertiajs/react'
const Home = ({ posts }) => {
  const { flash } = usePage().props
  const [flashMsg, setflashmsg] = useState([flash.message,flash.success])
  setTimeout(() => {
    setflashmsg(null)
  },2000)

  return (
    <div className='flex flex-col items-center'>
    <Head title="Home" />

      {flashMsg && flash.message && <div className='absolute top-24 right-6 bg-rose-500 p-2 rounded shadow-lg text-sm text-white'>{flash.message}</div>}
      {flashMsg && flash.success && <div className='absolute top-24 right-6 bg-green-500 p-2 rounded shadow-lg text-sm text-white'>{flash.success}</div>}

      <div className='pt-8'>
        {posts.data.map(post => (

          <div key={post.id} className='p-4 border-b'>
            <div className='text-sm text-slate-600'>
              <span>Posted on: </span>
              <span>{ new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className='font-medium'>{post.body}</p>
            <Link href={`posts/${post.id}`} className="mt-5 text-sm text-blue-600">Read More...</Link>
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