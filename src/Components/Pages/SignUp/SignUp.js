import React, { useRef, useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import LoginSocial from "../Login/LoginSocial.js/LoginSocial";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword,loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("updated profile");
    navigate("/home");
  };

  return (
    <div className="container mx-auto md:mx-20">
      <div className="flex justify-center align-middle mt-5 -mb-10">
        <p className="font-medium text-3xl text-gray-600 text-center popy">
          Welcome! Please
          <span className="text-[#ee316b]"> SignUp</span>
        </p>
      </div>

      <LoginSocial></LoginSocial>

      <form onSubmit={handleRegister} className="space-y-8 py-6">
        <div>
          <input
            ref={nameRef}
            type="name"
            placeholder="Your Name"
            className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
            required
          />
        </div>
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
        </div>
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          className="py-3 ml-5 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400focus:invalid:outline-none"
        />
        <label
          className={`ps-2 ${agree ? "text-[#ee316b]" : "text-red-500"}`}
          htmlFor="terms"
        >
          Accept Terms & Conditions
        </label>

        <div className="container mx-auto">
          <button
            disabled={!agree}
            className="w-full px-6 py-3 rounded-lg bg-[#ee316b] transition hover:bg-[#842d72] focus:bg-[#ee316b] active:bg-[#ee316b] disabled:bg-[#c8c8c8]"
          >
            <span className="font-bold text-white text-lg">SignUp</span>
          </button>

          <p className="text-sm text-center text-slate-600 mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              onClick={navigateLogin}
              className="text-[#ee316b] pe-auto text-decoration-none"
            >
              <span className="no-underline"> Login</span>
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
