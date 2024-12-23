import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Register/Register'
import Navigation from './Navigation/Navigation'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
