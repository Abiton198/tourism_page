import React from 'react'
import BlogCard from './BlogCard'
import Card from './Card'
import hotelsData from '../data/hotelsData'


const Hotels_Rest = () => {
  return (
    <div className='flex'>
      
      {hotelsData.map((data,index) => (
        <BlogCard 
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