import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import Signup from "./pages/Signup"
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { useSelector } from 'react-redux';

function App() {

  const {isLoggedIn} = useSelector(state => state.auth)
  const theme = useSelector((state) => state.ui.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >

            {/* what will go in the outlet */}
            
            {/* default index route */}
            {/* <Route index element={<Login />} /> */}

            {/* Public Routes */}
            <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="/home" replace />} /> 
            <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/home" replace />} />

            {/* protected route */}
            <Route path="/home" element={ isLoggedIn || localStorage.getItem("idToken") ? <Home /> : <Navigate to="/login" replace /> } />
            <Route path="/" element={ isLoggedIn || localStorage.getItem("idToken") ? <Home /> : <Navigate to="/login" replace /> } />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
