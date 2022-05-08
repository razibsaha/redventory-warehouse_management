import React from "react";

const Loading = () => {
  return (
    <div className="container flex justify-center align-middle my-5 py-10">
      <div
        class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-[#D5B69C]"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div
        class="
      spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0
        text-[#bc997d]
      "
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div
        class="
      spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
        text-[#D5B69C]
      "
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
