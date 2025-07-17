import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authActions } from '../store/auth-slice';
const apiKey = import.meta.env.VITE_API_KEY;

const VerifyEmail = ({ user }) => {

  const dispatch = useDispatch();
  const handleVerifyEmail = async () => {

    try {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: localStorage.getItem("idToken")
        })
      })

      if(!response.ok){
        const {error} = await response.json()
        throw new Error(error)
      }
      else{
        dispatch(authActions.emailverify(true))
        toast.success("Verification link sent ... Check your inbox")
      }
    }
    catch (error) { toast.error(error.message) }
  };

  return (

    <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>
      {
        !user.emailVerified && (
          <Button
            variant="danger"
            onClick={handleVerifyEmail}
            className="w-100"
          > 
            Verify Your Email
          </Button>
        )
      }
    </div>
  );
};

export default VerifyEmail;
