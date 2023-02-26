import React from 'react'

const BlogCard = ({img, text}) => {
  return (
    <div className='bg-black'>
        <img src={img}/>
        <p className='text-base font-extrabold'>{text}</p>
    </div>
  )
}

export default BlogCard