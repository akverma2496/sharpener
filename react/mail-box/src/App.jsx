import {BrowserRouter, Routes, Route} from 'react-router';
import Signup from "./pages/Signup"
import Layout from './pages/Layout';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth-state/auth-slice';
import AuthInitializer from './components/AuthInitializer';

function App() {

  const isHydrated = useSelector(state => state.auth.isHydrated)
// const dispatch = useDispatch()

//   const authData = JSON.parse(localStorage.getItem("auth"))
//   if(authData?.idToken){
//     dispatch(authActions.setAuthFromStorage(authData))
//   }

  return(
    <>
    <AuthInitializer />

    {
      !isHydrated ? <h3>Loading</h3> :
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              {/* what will go in the outlet */}

              {/* default index route */}
              <Route index element={<Login />} />

              {/* Public Routes */}
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />

              {/* protected route */}  
              <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
    }
    </>
  )
}

export default App
