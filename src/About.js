import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {

  document.title = "About Us | Ecommerce-Store"

  const data = {
    name: "Vish2kill ecommerce"
  }

  return (
    <>
      <HeroSection myData={data} />
    </>
  )
}

export default About