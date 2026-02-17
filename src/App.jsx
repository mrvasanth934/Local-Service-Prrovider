import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Compononts/Hero'
import HowweWoks from './Compononts/HowWeWorks'
import HowItWorks from './Compononts/HowItWorks'
import Category from './Compononts/Category'

function App() {
  const [name,setName] = useState("")
  useEffect(()=>{
    console.log("hello");
  },[])
  return (
    <>
      <Hero/>
      <Category/>
      <HowItWorks/>
    </>
  )
}

export default App
