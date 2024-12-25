import React from 'react'
import { useForm } from '@inertiajs/react'
import { Head } from '@inertiajs/react'



const create = () => {
    const { data, setData, post, processing, errors } = useForm({
        body: '',
    });
    function submit(e) {
        e.preventDefault()
        post('/posts')
      }
      
      
    return (
        <div>
                <Head title="Create" />

      <div className='title'>Create a Post</div>
      <div>
              <form onSubmit={submit} className='w-1/2 mx-auto'>
                    <textarea rows="10" value={data.body} onChange={e => setData('body', e.target.value)}></textarea>
                    <button className='primary-btn mt-4'>Create Post</button>
              </form>
            </div>
            </div>
  )
}

export default create