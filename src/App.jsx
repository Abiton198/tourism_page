import React from 'react'
import { HotelsRest, TravelTips ,SectionHead} from './components'




const App = () => {
  return (
    <div className=' flex-col m-2 p-2 bg-green'>
      <HotelsRest/>
      <SectionHead />
      <TravelTips/>
    </div>
  )
}

export default App