import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-state/auth-slice";

const AuthInitializer = ({ children }) => {

  const dispatch = useDispatch();

  useEffect(() => {

    let authData = null;

    try{
      authData = JSON.parse(localStorage.getItem("auth"));
    }
    catch(error){
      localStorage.removeItem("auth")
      dispatch(authActions.logout())
    }
    

    if (
      authData?.idToken &&
      typeof authData.expiresAt === "number" &&
      authData.expiresAt > Date.now()
    ) {
      dispatch(authActions.setAuthFromStorage(authData));

      // Auto logout timer
      const remainingTime = authData.expiresAt - Date.now();

      const logoutTimer = setTimeout(() => {
        dispatch(authActions.logout());
        localStorage.removeItem("auth");
      }, remainingTime);

      // Clear timer if component unmounts
      return () => clearTimeout(logoutTimer);
    } else {
      localStorage.removeItem("auth");
    }

    dispatch(authActions.setHydrated());
  }, [dispatch]);

  return children;
};

export default AuthInitializer;
