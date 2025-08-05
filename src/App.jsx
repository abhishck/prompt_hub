import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/ui/Header'
import Navbar from './components/ui/Navbar'
import Categories from './components/ui/Categories'
import Features from './components/ui/Features'
import Testiomonial from './components/ui/Testiomonial'
import Contact from './components/ui/Contact'

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
