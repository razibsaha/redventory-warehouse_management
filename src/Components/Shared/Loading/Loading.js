import React from "react";
import './Loading.css'

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader">
    <span></span>
    <span></span>
    <span></span>
    <h2>Loading....</h2>
</div>
    </div>
  );
};

export default Loading;
