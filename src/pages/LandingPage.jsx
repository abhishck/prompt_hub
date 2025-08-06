import React from 'react'
import Navbar from '../components/ui/Navbar'
import Categories from '../components/ui/Categories'
import Features from '../components/ui/Features'
import Testiomonial from '../components/ui/Testiomonial'
import Contact from '../components/ui/Contact'
import Header from '../components/ui/Header'

function LandingPage() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Categories/>
      <Features/>
      <Testiomonial/>
      <Contact/>
   </>
  )
}

export default LandingPage
