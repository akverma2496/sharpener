import React from 'react'
import { useSelector } from 'react-redux'
import ComposeMail from '../components/ComposeMail'


const Dashboard = () => {

  const email = useSelector(state => state.auth.email)

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to your Dashboard - {email}</h1>
      <ComposeMail />
    </>
  )
}

export default Dashboard