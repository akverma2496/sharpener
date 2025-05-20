import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from '../src/pages/Products';
import Home from '../src/pages/Home';
import Layout from '../src/pages/Layout';
import About from "../src/pages/About";
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* what will go in the outlet */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='products' element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
