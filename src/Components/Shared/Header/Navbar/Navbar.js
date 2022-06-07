  import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../../../Assets/Images/red-ventory-white.png';
import auth from "../../../../firebase.init";

  const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSigOut = () => {
      signOut(auth);
    };
    return (
      <header>
        <div className="z-20 border-b bg-slate-800">
          <div className="px-6 md:px-12 lg:container mx-auto lg:px-6 lg:py-4">
            <div className="flex items-center justify-center">
              <div className="relative z-20">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-[#ee316b] transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-[#ee316b] transition duration-300"
                  ></div>
                </label>

                <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-0rem)] translate-x-[-100%] bg-slate-800 border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul className="flex md:flex-row flex-col justify-center items-center px-6 pt-32 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0 text-decoration-none">
                    
                      <li>
                      <NavLink className='border-0'
                          to="/">
                        <img className="h-20 w-full" src={Logo} alt="" /> 
                        </NavLink>
                      </li>
                     
                      <li>
                        <NavLink
                          to="/home"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ee316b] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 no-underline"
                        >
                          <span className="relative group-hover:text-[#ee316b] no-underline">
                            Home
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ee316b] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 no-underline"
                        >
                          <span className="relative group-hover:text-[#ee316b] no-underline">
                            Blog
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/manageinventories"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ee316b] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 no-underline"
                        >
                          <span className="relative group-hover:text-[#ee316b] no-underline">
                            Manage Inventories
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        {user ? (
                          <NavLink
                            to="/myitems"
                            className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ee316b] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 no-underline"
                          >
                            <span className="relative group-hover:text-[#ee316b] no-underline">
                              My Items
                            </span>
                          </NavLink>
                        ) : (
                          ""
                        )}
                      </li>
                      <li>
                        {user ? (
                          <NavLink
                            to="/additems"
                            className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-[#ee316b] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100 no-underline"
                          >
                            <span className="relative group-hover:text-[#ee316b] no-underline">
                              Add Items
                            </span>
                          </NavLink>
                        ) : (
                          ""
                        )}
                      </li>
                    </ul>

                    <div className="border-t mb-3 py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                      {user ? (
                        <NavLink
                          to="/login"
                          className="block px-6 py-3 rounded-full bg-gradient-to-r from-[#ee316b] to-[#cca585] text-center text-white no-underline"
                          onClick={handleSigOut}
                        >
                          Sign Out
                        </NavLink>
                      ) : (
                        <NavLink
                          as={Link}
                          to="/login"
                          className="block px-6 py-2 rounded-full bg-gradient-to-r from-[#ee316b] to-[#cca585] text-center text-white no-underline"
                        >
                          Login
                        </NavLink>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  export default Navbar;
