import React from "react";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
