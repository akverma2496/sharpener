import { useContext, useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

const apiKey = import.meta.env.VITE_API_KEY;

const VerifyEmail = ({ user }) => {

  const [alert, showAlert] = useState(false)

  const handleVerifyEmail = async () => {

    try {
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: localStorage.getItem("idToken")
        })
      })

      // const data = await response.json()

      showAlert(true);

    }
    catch (err) { }
  };

  return (

    <div className="container" style={{ maxWidth: '400px', marginTop: '50px' }}>

      {alert ? (
        <Alert variant="success" className="mt-3">
          A verification email has been sent! Please check your inbox.
        </Alert>
      ) : (
        !user.emailVerified && (
          <Button
            variant="danger"
            onClick={handleVerifyEmail}
            className="w-100"
          >
            Verify Your Email
          </Button>
        )
      )}
    </div>
  );
};

export default VerifyEmail;
