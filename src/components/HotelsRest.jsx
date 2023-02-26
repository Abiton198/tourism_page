import React from 'react'
import HotelsInfoCard from './HotelsInfoCard'
import hotelsData from '../data/hotelsData'
import SectionHead from './SectionHead'
import { BsStar } from 'react-icons/bs'


const HotelsRest = () => {
  const style = { color: "yellow", fontSize: ".9em" }

  return (
   <div className=''>
      <SectionHead text='Hotels and Restaurants'/>
     <div className='mb-20 grid md:grid-cols-4  md:flex-1 my-10 md:my-0 justify-center items-center md:gap-10 lg:gap-10'>

            {hotelsData.map((data,index) => (
              <HotelsInfoCard 
                    key=  {index}
                    img = {data.img}
                    text = {data.text}
                    icon ={<BsStar style={style}/>}
                    />
            )        
            )}
     </div>
            </div>
  
  )
}

export default HotelsRest