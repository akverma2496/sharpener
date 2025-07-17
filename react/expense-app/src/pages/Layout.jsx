import { ToastContainer,Bounce } from "react-toastify"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Outlet />
    </div>
  )
}

export default Layout