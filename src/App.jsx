// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav/Nav'
// import DaisyNav from './component/DaisyNav/DaisyNav'
import PriceOptions from './component/PriceOptions/PriceOptions'
import LineChart from './component/LineChart/LineChart'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <h1 className='text-6xl'>Vite + React</h1> */}
      {/* <DaisyNav></DaisyNav> */}
     <Nav></Nav>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
    </>
  )
}

export default App
