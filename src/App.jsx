import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Compononts/Hero'
import HowweWoks from './Compononts/HowWeWorks'
import HowItWorks from './Compononts/HowItWorks'

function App() {
  const [name,setName] = useState("")
  useEffect(()=>{
    console.log("hello");
  },[])
  return (
    <>
      <Hero/>

      <HowItWorks/>
    </>
  )
}

export default App
