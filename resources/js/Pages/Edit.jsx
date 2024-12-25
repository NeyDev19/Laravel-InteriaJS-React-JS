import React from 'react'
import { useForm } from '@inertiajs/react'
import { Head } from '@inertiajs/react'

const Edit = ( {post}) => {
    const { data, setData, put, processing, errors } = useForm({
        body: post.body || '',
    });
    function submit(e) {
        e.preventDefault()
        put(`/posts/${post.id}`)
      }
  return (
      <div>
          <div>
    <Head title="Edit" />

<div className='title'>Update a Post</div>
<div>
  <form onSubmit={submit} className='w-1/2 mx-auto'>
        <textarea  rows="10" value={data.body} onChange={e => setData('body', e.target.value)}></textarea>
        <button className='primary-btn mt-4'>Update Post</button>
  </form>
</div>
</div>
</div>
  )
}

export default Edit