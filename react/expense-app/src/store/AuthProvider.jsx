import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = (props) => {

    const [idToken, setIdToken] = useState(localStorage.getItem("idToken"));
    const [loggedIn, setLoggedIn] = useState(!!idToken)
    const [userId, setUserId] = useState(localStorage.getItem("userId"));

    const authValues = {
        idToken,
        setIdToken,
        loggedIn,
        setLoggedIn,
        userId,
        setUserId
    }

  return (
    <AuthContext.Provider value={authValues}> 
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider