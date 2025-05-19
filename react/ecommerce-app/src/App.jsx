import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from '../src/pages/Store';
import Home from '../src/pages/Home';
import Layout from '../src/pages/Layout';
import About from "../src/pages/About";
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* what will go in the outlet */}
          <Route index element={<Home />} />
          <Route path='store' element={<Store />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
