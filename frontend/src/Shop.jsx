import { useState } from 'react'

import './index.css'
import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";

function Shop() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
        <HeroSection/>
    </>
  )
}

export default Shop
