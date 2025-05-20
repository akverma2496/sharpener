import { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [idToken, setIdToken] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const authValues = {
        idToken : idToken,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        setIdToken: setIdToken
    }

  return (
    <AuthContext.Provider value={authValues}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider