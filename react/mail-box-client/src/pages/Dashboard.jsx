import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

    const email = useSelector(state => state.auth.email)

  return (
    <h1>Welcom to your Dashboard - {email}</h1>
  )
}

export default Dashboard