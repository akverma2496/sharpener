import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const [isProfileCompleted, setIsProfileCompleted] = useState(false)

  useEffect(() => {
    const checkForUser = async() => {
      try{
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
          method: "POST",
          body: JSON.stringify({ idToken : localStorage.getItem("idToken")}),
          headers: { "Content-Type" : "application/json"}
        })
        const {users} = await response.json()
        if(!users[0].displayName) setIsProfileCompleted(true)
  
      }
      catch(err){

      }
    }

    checkForUser()
  },[])
  return (
    <>
    <div>Welcome to the HomePage</div>
    {isProfileCompleted && <Link to="/complete-profile">Complete your profile</Link>}
    </> 
  )
}

export default Home