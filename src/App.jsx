import React from 'react'
import { Hotels_Rest, Travel_Tips ,SectionHead} from './components'




const App = () => {
  return (
    <div className=' flex-col m-2 p-2 bg-green'>
      <Hotels_Rest/>
      <SectionHead />
      <Travel_Tips/>
    </div>
  )
}

export default App