import React from 'react';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold'>Inventory</h1>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;