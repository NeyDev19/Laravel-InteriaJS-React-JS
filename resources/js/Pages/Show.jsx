import React from 'react'
import { Link, useForm } from '@inertiajs/react'
import { Head } from '@inertiajs/react'



const Show = ({ post }) => {
    const { delete: destroy } = useForm();
    function submit(e) {
        e.preventDefault()
        destroy(`/posts/${post.id}`);
      }
      
  return (
      <div className='p-4 border-b'>
              <Head title="Home" />

    <div className='text-sm text-slate-600'>
      <span>Posted on: </span>
      <span>{ new Date(post.created_at).toLocaleTimeString()}</span>
    </div>
          <p className='font-medium'>{post.body}</p>
          <div className='flex items-center justify-end'>
              <form onSubmit={submit}>
                  <button className='rounded bg-red-500 px-4 py-1 text-sm text-white'>Delete</button>
              </form>
              <Link href={`/posts/${post.id}/edit`} className='ml-2 rounded bg-green-500 px-4 py-1 text-sm text-white'>Update</Link>
          </div>
      </div>

  )
}

export default Show