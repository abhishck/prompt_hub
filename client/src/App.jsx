import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import Register from './components/auth-ui/Register'
// import Login from './components/auth-ui/Login'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import ProductDescription from './components/ui/ProductDescription'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/category' element={<ProductPage/>} />
      <Route path='/products' element={<ProductPage/>} />
      <Route path='/productDesc' element={<ProductDescription/>} />
      <Route path='*' element={<NotFound/>} />
      
     </Routes>
    </>
  )
}

export default App
