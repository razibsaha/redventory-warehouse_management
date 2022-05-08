import React from "react";
import googleIcon from "../../../../Assets/icons/google-48.png";
import githubIcon from "../../../../Assets/icons/github-48.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

import auth from "../../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const LoginSocial = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  let errorMessage;
  if (error || error1) {
    errorMessage = (
      <p className="text-red-600">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (loading || loading1) {
    return <Loading></Loading>
  }
  if (user || user1) {
    navigate("/home");
  }
  return (
    <div className="container mx-auto py-3 px-6 sm:p-20 xl:w-10/12">
      <div
        onClick={() => signInWithGoogle()}
        className="mt-5 grid gap-6 sm:grid-cols-2"
      >
        <button className="h-12 px-6 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
          <div className="flex items-center space-x-4 justify-center">
            <img src={googleIcon} className="w-5" alt="" />
            <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
              Continue with Google
            </span>
          </div>
        </button>

        <button
          onClick={() => signInWithGithub()}
          className="h-12 px-6 rounded-lg bg-slate-500 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700"
        >
          <div className="flex items-center space-x-4 justify-center">
            <img src={githubIcon} className="w-5" alt="" />
            <span className="block w-max font-medium tracking-wide text-sm text-slate-50">
              Continue with Github
            </span>
          </div>
        </button>
        <p className="text-center flex justify-center align-middle">
          {errorMessage}
        </p>
      </div>

      <div className="mt-12 border-t">
        <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
          Or
        </span>
      </div>
    </div>
  );
};

export default LoginSocial;
