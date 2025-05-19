import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import MainHeader from "../components/MainHeader"

const Layout = () => {
  return (
    <>
    <MainHeader />
    <h1 style={{textAlign: "center", padding: "1em", backgroundColor: "lightgray"}}>The Generics</h1>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout