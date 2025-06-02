import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = (props) => {

    const [idToken, setIdToken] = useState(localStorage.getItem("idToken"));
    const [loggedIn, setLoggedIn] = useState(!!idToken)

    const authValues = {
        idToken: idToken,
        setIdToken: setIdToken,
        loggedIn: loggedIn,
        setLoggedIn: setLoggedIn
    }

  return (
    <AuthContext.Provider value={authValues}> 
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider