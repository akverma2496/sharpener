import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from '../src/pages/Products';
import Home from '../src/pages/Home';
import Layout from '../src/pages/Layout';
import About from "../src/pages/About";
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import ChangePassword from "./pages/ChangePassword"
import { useContext } from 'react';
import { AuthContext } from './store/AuthProvider';

function App() {

  const authValues = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* what will go in the outlet */}
          <Route index element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={authValues.isLoggedIn ? <Products /> : <Navigate to="/" />} />
          <Route path="/products/:id" element={authValues.isLoggedIn ? <ProductDetail /> : <Navigate to="/" />} />

          <Route path="/signup" element={!authValues.isLoggedIn ? <SignupPage /> : <Navigate to="/products" replace />} />
          <Route path="/login" element={!authValues.isLoggedIn ? <LoginPage /> : <Navigate to="/products" replace />} />
          <Route path="/change-password" element={<ChangePassword />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
