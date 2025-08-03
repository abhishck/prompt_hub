import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Features from './components/Features'
import Testiomonial from './components/Testiomonial'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

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

export default App
