import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContext, cartItems } from './store/context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext.Provider value={cartItems}>
    <App />
    </CartContext.Provider>
  </StrictMode>,
)
