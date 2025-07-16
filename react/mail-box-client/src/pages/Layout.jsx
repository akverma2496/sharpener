import { ToastContainer, Bounce } from "react-toastify"
//import Header from "../components/Header"
import { Outlet } from "react-router"

// const myStyles={
//         backgroundImage: `url('/images/mail-back.png')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh', // <– ensures full viewport height
//         display: 'flex',
//         flexDirection: 'column',
//       }

const Layout = () => {
  return (
    <div>
      {/* <Header /> */}
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