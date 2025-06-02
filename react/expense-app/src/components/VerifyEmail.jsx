import { useContext, useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

const apiKey = import.meta.env.VITE_API_KEY;

const VerifyEmail = (props) => {

  const [emailVerified, setEmailVerified] = useState(false);

  // Simulate sending a verification email
  const handleVerifyEmail = async () => {
    // Simulate sending email
    try{
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,{
            method : "POST",
            body : JSON.stringify({
                requestType: "VERIFY_EMAIL",
                idToken: localStorage.getItem("idToken")
            })
        })

        const data = await response.json()
        console.log(data)
        setEmailVerified(true);
        // setTimeout(() => {
        //   props.setUser((prev) => {
        //   return {
        //     ...prev,
        //     emailVerified: false
        //   }
        // })
        // },2000)
        
    }
    catch(err){

    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>

      {/* Verify Email Button */}
      {!emailVerified ? (
        <Button
          variant="danger"
          onClick={handleVerifyEmail}
          className="w-100"
        >
          Verify Your Email
        </Button>
      ) : (
        <Alert variant="success" className="mt-3">
          A verification email has been sent! Please check your inbox.
        </Alert>
      )}
      
      
      {/* {errorMessage && (
        <Alert variant="danger" className="mt-3">
          {errorMessage}
        </Alert>
      )} */}
      
    </div>
  );
};

export default VerifyEmail;
