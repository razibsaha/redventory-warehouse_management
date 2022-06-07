import React from "react";

const Modal = ({title,textDetails,changeModal}) => {
const {name,image} = textDetails;
  return (
    <div className="flex justify-center items-center bg-slate-800 bg-opacity-50 h-75 fixed inset-0 z-50">
      <div className="relative md:w-75 w-50 my-3 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center justify-center p-3 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-center name">{title}</h3>
            
          </div>
          {/*body*/}
          <div className="relative p-6 flex justify-center items-center">
              <img className=" object-center md:h-[250px] h-[150px] w-auto" src={image} alt="" />
            </div>
          <div className="flex justify-center items-center">
              <p>{name}</p>
            </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => changeModal(false)}
            >
              Close
            </button>
            <button
              className="bg-[#ee316b] hover:bg-[#842d72] text-white active:bg-[#842d72] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => changeModal(false)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
