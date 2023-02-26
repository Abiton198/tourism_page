import React from 'react'
import TravelInfoCard from './HotelsInfoCard'
import TravelTripsData from '../data/TravelTripsData'
import SectionHead from './SectionHead'


function TravelTips() {
  return (
    <div className='mt-20'>
        <SectionHead text='Travel Tips and Advice'/>
    <div className='grid md:grid-cols-4  md:flex-1 my-10 md:my-0 justify-center items-center md:gap-10 lg:gap-10'>
     
      {/* images and text rendered on page from data file */}
       {TravelTripsData.map((data,index) =>(
        <TravelInfoCard  key={index} 
                    img = {data.img}
                    title ={data.title}
                    text = {data.text}
                              />)) }
    </div>
                    </div>
  )
}

export default TravelTips