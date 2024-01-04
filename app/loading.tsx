import BlogLogo from '@/components/Header/logo'
import React from 'react'

function Loading() {
  return (
    <div className='h-[100vh] top-0 left-0 fixed w-full border-gray backdrop-blur-sm bg-dark flex justify-center items-center z-20'> <BlogLogo/></div>
  )
}

export default Loading