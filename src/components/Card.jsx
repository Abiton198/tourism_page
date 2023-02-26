import React from 'react'

// creating props for the 
const Card = ({title, text}) => {
  return (
    <div className='w-[320px] h-[380px] bg-white text-[#5B5B5B]'>
        <h1 className='text-base'>{title}</h1>
        <p className='text-xl'>{text}</p>
    </div>
  )
}

export default Card