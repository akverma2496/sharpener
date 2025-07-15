import {BrowserRouter, Routes, Route} from 'react-router';
import Signup from "./pages/Signup"
import Layout from './pages/Layout';

function App() {

  return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              {/* <Route path='/signup' element={<Signup />} /> */}
              {/* what will go in the outlet */}

              {/* default index route */}
              {/* <Route index element={<Login />} /> */}
              <Route index element={<Signup />} />
              

              {/* Public Routes */}
              {/* <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="/home" replace />} /> 
            <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/home" replace />} /> */}

              {/* protected route */}
              {/* <Route path="/home" element={ isLoggedIn || localStorage.getItem("idToken") ? <Home /> : <Navigate to="/login" replace /> } />
            <Route path="/" element={ isLoggedIn || localStorage.getItem("idToken") ? <Home /> : <Navigate to="/login" replace /> } /> */}

            </Route>
          </Routes>
        </BrowserRouter>
  )
}

export default App
