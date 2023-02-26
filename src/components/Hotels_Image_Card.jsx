import React from 'react'

// this is structure for the Hotels and Restaurants 
// !initial props are written in this reusable component

const Hotel_Image_Card = ({img, text}) => {
  return (
    <div className='flex bg-black'>
        <img src={img}/>
           <p className='text-base font-extrabold text-red-600'>{text}</p>
    </div>
  )
}

export default Hotel_Image_Card