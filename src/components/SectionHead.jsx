import React from 'react'

const SectionHead = ({bg_color = 'black', text}) => {
  return (
    <div>
        <h1 className='' style={bg_color}> {text}</h1>
    </div>
  )
}

export default SectionHead