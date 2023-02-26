import React from 'react'

// creating props for the Travel and Tips
const Travel_Info_Card = ({ img, title, text}) => {
  return (
    <div className='flex w-[320px] h-[380px] bg-white text-[#5B5B5B]'>
        <img src={img}/>
        <h3 className='text-base'>{title}</h3>
        <p className='text-xl'>{text}</p>
    </div>
  )
}

export default Travel_Info_Card