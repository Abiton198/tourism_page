import React from 'react'
import Travel_Info_Card from './Travel_Info_Card'
import hotelsData from '../data/hotelsData'
import SectionHead from './SectionHead'


const Hotels_Rest = () => {
  return (
    <div className='flex'>
      <SectionHead text='Hotels and Restaurants'/>
      
      {hotelsData.map((data,index) => (
        <Travel_Info_Card 
              key=  {index}
              img = {data.img}
              text = {data.text}/>
      )
        
        
)}

        {/* <BlogCard 
              title='East Village Ice Cream Crawl'
              text = 'This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. '/> */}
    </div>
  )
}

export default Hotels_Rest