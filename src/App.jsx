import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDonor from './Components/AddDonor'
import ViewDonor from './Components/ViewDonor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddDonor/>
     <ViewDonor/>
    </>
  )
}

export default App
