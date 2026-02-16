import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Compononts/Hero'

function App() {
  const [name,setName] = useState("")
  useEffect(()=>{
    console.log("hello");
  },[])
  return (
    <>
      <Hero/>
    </>
  )
}

export default App
