import React from 'react'

const SectionHead = ({bg_color="black", text}) => {
  const textStyle = {
    textColor: bg_color
        }
  return (
    
          <div>
              <h1 className='font-3xl' style={textStyle}> {text}</h1>
          </div>
        
        )

}

export default SectionHead