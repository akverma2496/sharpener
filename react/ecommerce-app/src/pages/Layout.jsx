import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import MainHeader from "../components/MainHeader"

const Layout = () => {
  return (
    <>
    <MainHeader />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout