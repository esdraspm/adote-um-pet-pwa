import './App.css'
import { Login } from './pages/login/login';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home/home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}