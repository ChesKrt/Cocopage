import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Index.css'
import App from './App.jsx'
import Index from './Index.jsx'
import SecondPage from './SecondPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/SecondPage' element={<SecondPage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
