import React from 'react'
import { Hotels_Rest, Travel_Tips } from './components'



const App = () => {
  return (
    <div className='flex m-5 p-5 bg-green'>
      <Hotels_Rest/>
      <Travel_Tips/>
    </div>
  )
}

export default App