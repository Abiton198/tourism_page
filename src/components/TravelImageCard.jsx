import React from 'react'

// this is structure for the Hotels and Restaurants 
// !initial props are written in this reusable component

const TravelImageCard = ({img, text}) => {
  return (
    <div className='grid grid-rows-1'>
        <img src={img}/>
           <p className='text-base font-bold text-red-600 '>{text}</p>
           
    </div>
  )
}

export default TravelImageCard
