import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Compononts/Hero'
import HowweWoks from './Compononts/HowWeWorks'
import Category from './Compononts/Category'
import Popular from './Compononts/Popular'
import WhyChooseUs from './Compononts/WhyChooseUs'
import CtaBox from './Compononts/CtaBox'

function App() {
  const [name,setName] = useState("")
  return (
    <>
      <Hero/>
      <Popular/>
      <HowweWoks/>
      <Category/>
      {/* <WhyChooseUs/> */}
      <CtaBox/>
    </>
  )
}

export default App
