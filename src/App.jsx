import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './Pages/LoginForm'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/home' element={<Home />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App