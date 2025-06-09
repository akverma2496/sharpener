import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Signup from "./pages/Signup"
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { useContext } from 'react';
import { AuthContext } from './store/AuthProvider';

function App() {

  const {loggedIn} = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >

            {/* what will go in the outlet */}
            
            {/* default index route */}
            <Route index element={<Login />} />

            {/* Public Routes */}
            <Route path="/signup" element={!loggedIn ? <Signup /> : <Navigate to="/home" replace />} /> 
            <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/home" replace />} />

            {/* protected route */}
            <Route path="/home" element={ loggedIn || localStorage.getItem("idToken") ? <Home /> : <Navigate to="/login" replace /> } />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
