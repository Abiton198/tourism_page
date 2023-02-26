import React from 'react'
import Hotels_Info_Card from './Hotels_Info_Card'
import hotelsData from '../data/hotelsData'
import SectionHead from './SectionHead'
import { BsStar } from 'react-icons/bs'


const Hotels_Rest = () => {
  const style = { color: "yellow", fontSize: ".9em" }

  return (
   <div className=''>
      <SectionHead text='Hotels and Restaurants'/>
     <div className='mb-20 grid md:grid-cols-4  md:flex-1 my-10 md:my-0 justify-center items-center md:gap-10 lg:gap-10'>

            {hotelsData.map((data,index) => (
              <Hotels_Info_Card 
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

export default Hotels_Rest