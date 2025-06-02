import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VerifyEmail from '../components/VerifyEmail'
import CompleteProfile from '../components/CompleteProfile'
import MainView from '../components/MainView'

const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const [user, setUser] = useState({
    emailVerified : false,
    displayName: ""
  })
  
  useEffect(() => {
    const checkForUser = async() => {
      try{
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
          method: "POST",
          body: JSON.stringify({ idToken : localStorage.getItem("idToken")}),
          headers: { "Content-Type" : "application/json"}
        })

        if(!response.ok) console.log("response is not ok")
        const {users} = await response.json()
        console.log(users)
        setUser({
          emailVerified : !users[0].emailVerified,
          displayName : !users[0].displayName
        })
      }
      catch(err){

      }
    }
    
    checkForUser()
  },[])
  return (
    <>
    {user.emailVerified && <VerifyEmail/>}
    {user.displayName && <CompleteProfile />}
    {!user.emailVerified && !user.displayName && <MainView />}
    </>
  )
}

export default Home