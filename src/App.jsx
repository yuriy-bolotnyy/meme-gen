import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import './App.css'

import Navbar from './components/Navbar'
import MemeFlex from './components/MemeFlex'
import MemeGrid from './components/MemeGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Navbar />
      {/* <MemeFlex /> */}
      <MemeGrid />
    </div>
  )
}

export default App
