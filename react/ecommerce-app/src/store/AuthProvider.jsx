import { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [idToken, setIdToken] = useState(localStorage.getItem("idToken"))
    const [isLoggedIn, setIsLoggedIn] = useState(!!idToken)
    const [userId, setUserId] = useState(localStorage.getItem("userId"))

    const authValues = {
        idToken,
        isLoggedIn,
        setIsLoggedIn,
        setIdToken,
        userId,
        setUserId
    }

  return (
    <AuthContext.Provider value={authValues}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider