import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductProvider from './store/ProductProvider.jsx';
import AuthProvider from './store/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
   <ProductProvider>
      <App />
    </ProductProvider>
    </AuthProvider>
  </StrictMode>,
)
