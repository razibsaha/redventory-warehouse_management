import React from 'react';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className='container-fluid mx-auto fixed top-0 left-0 right-0 md:flex justify-center items-center pb-5 pt-5 bg-slate-700 z-10'>
            <h1>Inventory</h1>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;