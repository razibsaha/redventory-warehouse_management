import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import LoginSocial from "./LoginSocial.js/LoginSocial";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  const navigateSignUp = () => {
    navigate("/signup");
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast("Mail Sent");
    }
    else {
      toast("Please enter your email address");
    }
    
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center align-middle mt-5 -mb-10">
        <p className="font-medium text-3xl text-gray-600 text-center popy">
          Welcome! Please
          <span className="text-[#D5B69C]"> Login.</span>
        </p>
      </div>

      <LoginSocial></LoginSocial>

      <form onSubmit={handleSubmit} className="space-y-8 py-6">
        <div>
          <input
            ref={emailRef}
            type="email"
            placeholder="Your Email"
            className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
            required
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <input
            ref={passwordRef}
            type="password"
            placeholder="What's the secret word ?"
            className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
            required
          />
          <button
            onClick={resetPassword}
            className="w-max text-right p-3 -mr-3 text-sm tracking-wide text-slate-400 hover:text-[#D5B69C]"
          >
            Forgot password ?
          </button>
        </div>

        <div className="container -mt-3 mx-auto">
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-[#D5B69C] transition hover:bg-[#c19f83] focus:bg-[[#D5B69C]] active:bg-[#D5B69C]"
          >
            <span className="font-bold text-white text-lg">Login</span>
          </button>
          <p className="text-sm text-center text-slate-600 mt-3">
            Don't have an account? Please
            <Link
              to="/signup"
              className="text-[#D5B69C] pe-auto text-decoration-none"
              onClick={navigateSignUp}
            >
              {" "}
              SignUp
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
