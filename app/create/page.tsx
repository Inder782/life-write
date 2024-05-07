import Quill_F from '@/components/quill/Quill_F'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 '>
    <input className='focus:outline-none bg-transparent w-2/3 p-6 text-3xl' placeholder='Title goes here'/>
    
    <Quill_F/>
</div>

  )
}

export default Page