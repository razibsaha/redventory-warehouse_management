import React from "react";
import {
    useAuthState,
    useSendEmailVerification
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";


const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  /* if (sending) {
    <div>
        toast('Email Sent');
        <ToastContainer />
    </div>
  } */
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  
  if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return (
      <div className="container flex flex-col justify-center align-middle mx-auto my-5">
        <p className="text-[#ee316b] text-5xl pfair text-center">
          Verification Email sent
        </p>
        <p className="text-red-400 font-bold text-2xl text-center">
          Please verify
        </p>
        <div className="text-center">
          <button
            className="bg-[#4b4948] w-25 text-center p-3 rounded-md text-white hover:bg-[#262626]"
            onClick={async () => {
              await sendEmailVerification();
              toast("Email Sent");
            }}
          >
            Send Again
          </button>
          <ToastContainer />
        </div>
        
      </div>
    );
  }
  return children;
};

export default RequireAuth;
