import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VerifyEmail from '../components/VerifyEmail'
import CompleteProfile from '../components/CompleteProfile'
import MainView from '../components/MainView'
import { AuthContext } from '../store/AuthProvider'
import { getFreshTokens } from '../utilities/getFreshTokens'
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const [refreshUser, setRefreshUser] = useState(false);

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    emailVerified: false,
    displayName: ""
  })

  useEffect(() => {

    const checkForUser = async () => {
      try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
          method: "POST",
          body: JSON.stringify({ idToken: localStorage.getItem("idToken") }),
          headers: { "Content-Type": "application/json" }
        })

        const data = await response.json()
        console.log(data)

        if (data.error?.message === "INVALID_ID_TOKEN") {

          console.log("calling fresh tokens")
          const idToken = await getFreshTokens();
          const retryResponse = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
            method: "POST",
            body: JSON.stringify({ idToken: idToken}),
            headers: { "Content-Type": "application/json" }
          })

          const retryJson = await retryResponse.json();

        const user = retryJson.users?.[0];

          setUser({
            emailVerified: user.emailVerified,
            displayName: user.displayName || ""
          })
          setLoading(false)
        }
        else {
          console.log("going into this")
          const user = data.users?.[0]

          setUser({
            emailVerified: user.emailVerified,
            displayName: user.displayName || ""
          })
          setLoading(false)
        }
      }
      catch (err) { }
    }

    checkForUser()
  }, [refreshUser])

  return (
    <>
      {loading ? (
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh" }}>Loading...</h2>
      ) : (
        <>
          {(!user.emailVerified || !user.displayName) ? (
            <>
              {!user.emailVerified && <VerifyEmail user={user} />}
              {!user.displayName && <CompleteProfile setRefreshUser={setRefreshUser} />}
            </>
          ) : (
            <MainView />
          )}
        </>
      )}
    </>
  )
}

export default Home