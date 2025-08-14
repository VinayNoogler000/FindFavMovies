import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouer } from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouer> 
      <App />
    </BrowserRouer>
  </StrictMode>,
)
