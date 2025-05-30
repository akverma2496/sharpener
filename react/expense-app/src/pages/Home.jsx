import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Welcome to the HomePage</div>
    <Link to="/complete-profile">Complete your profile</Link>
    </> 
  )
}

export default Home