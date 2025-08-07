import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import NotFound from './pages/NotFound'
import Register from './components/auth-ui/Register'
import Login from './components/auth-ui/Login'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/products' element={<ProductPage/>} />
      <Route path='*' element={<NotFound/>} />
      
     </Routes>
    </>
  )
}

export default App
