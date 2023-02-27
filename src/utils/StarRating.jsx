import React from 'react'
import { BsStarFill } from 'react-icons/bs'

function StarRating() {
    const style = { color: "yellow", fontSize: ".9em" }
    // making a loop of start to display 5
    const stars = []
    for (let i = 0; i<5; i++){
        stars.push(<BsStarFill key={i}/>)
    }
  return (
    <div className='flex ' style={style}>
            {stars.map((star) => star)}
    </div>
  )
}

export default StarRating