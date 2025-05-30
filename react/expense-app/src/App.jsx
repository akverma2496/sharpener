import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from "./pages/Signup"
import Login from './pages/Login';
import Home from './pages/Home';
import CompleteProfile from './pages/CompleteProfile';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
          {/* what will go in the outlet */}
          {/* <Route index element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}

          {/* <Route path='/products' element={<Products />} /> */}

          {/* <Route exact path="/products">
            {authValues.isLoggedIn ?  <Products /> : <Redirect to="/" />}
          </Route> */}

          {/* <Route path="products/:id" element={<ProductDetail />} /> */}

          {/* <Route exact path="/products/:id">
            {authValues.isLoggedIn ? <ProductDetail /> : <Redirect to="/" /> }
          </Route> */}

          {/* <Route path="/products" element={authValues.isLoggedIn ? <Products /> : <Navigate to="/" />} />
          <Route path="/products/:id" element={authValues.isLoggedIn ? <ProductDetail /> : <Navigate to="/" />} /> */}

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/complete-profile' element={<CompleteProfile />} />
          {/* <Route path="/change-password" element={<ChangePassword />} /> */}
          
    
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
