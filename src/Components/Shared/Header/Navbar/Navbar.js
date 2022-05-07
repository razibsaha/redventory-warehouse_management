import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className='sm:flex justify-start items-center gap-5 text-red-500 font-semibold'>
                <li>
                <NavLink to='/'> Home </NavLink>
                </li>
                <li>
                <NavLink to='/login'> Login </NavLink>
                </li>
                <li>
                <NavLink to='/signup'> SignUp </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;