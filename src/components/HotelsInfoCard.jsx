import React from 'react'



// creating props for the Travel and Tips
const HotelsInfoCard = ({ img, title, text, icon}) => {
  return (
    <div className='grid grid-rows-1 mt-5'>
    
          <div className='flex-col p-2'>
              <img src={img} className=''/>
              <h3 className='text-xl font-black'>{title}</h3>
              <p className='text-base'>{text}</p>

              <div className='flex justify-between'>
                    <p className='text-sm'>location</p>
                    <p className='flex justify-end p-1'>{icon}{icon}{icon}{icon}{icon}</p>
              </div>
          </div>
    </div>
  )
}

export default HotelsInfoCard