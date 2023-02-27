import React from 'react'
import StarRating from '../utils/StarRating'
import {IoLocationOutline} from 'react-icons/all'




// creating props for the Travel and Tips
const HotelsInfoCard = ({ img, title, text, icon}) => {
  return (
    <div className='grid grid-rows-1 mt-5'>
    
          <div className='flex-col p-2'>
              <img src={img} className=''/>
              <h3 className='text-xl font-black'>{title}</h3>
              <p className='text-base'>{text}</p>

              <div className='flex justify-between'>
                    <p className='text-sm flex'>{<IoLocationOutline/>}<span className='ml-1 text-[.8em]'>location</span></p>
                    <p className='flex justify-end p-1'>{<StarRating/>}</p>
              </div>
          </div>
    </div>
  )
}

export default HotelsInfoCard