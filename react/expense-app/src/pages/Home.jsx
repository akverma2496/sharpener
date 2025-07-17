import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VerifyEmail from '../components/VerifyEmail'
import CompleteProfile from '../components/CompleteProfile'
import MainView from '../components/MainView'
import { useDispatch, useSelector } from 'react-redux'
import { isProfileCompleted } from '../store/auth-actions'
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

  const user = useSelector(state => state.auth)
  const loading = useSelector(state => state.ui.loading)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
     dispatch(isProfileCompleted(navigate))
  }, [])

  return (
    <>
      {loading ? (
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh" }}>Loading...</h2>
      ) : (
        <>
          {(!user.emailVerified || !user.displayName) ? (
            <>
              {!user.emailVerified && <VerifyEmail user={user} />}
              {!user.displayName && <CompleteProfile />}
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