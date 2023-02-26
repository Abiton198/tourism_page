import React from 'react'
import Travel_Info_Card from './Travel_Info_Card'
import TravelTripsData from '../data/TravelTripsData'
import SectionHead from './SectionHead'

function Travel_Tips() {
  return (
    <div>
      <SectionHead text='Travel Tips and Advice'/>
       {TravelTripsData.map((data,index) =>(
        <Travel_Info_Card  key={index} 
                    img = {data.img}
                    title ={data.title}
                    text = {data.text}/>
       )) }
    </div>
  )
}

export default Travel_Tips