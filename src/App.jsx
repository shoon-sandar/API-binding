import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './Pages/LoginForm'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App