
import React from 'react';
import Banners from '../Banners/Banners';
import Dashboard from '../Dashboard/Dashboard';
import Inventories from '../Inventories/Inventories';
import Partners from '../Partners/Partners';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Inventories></Inventories>
            <Dashboard></Dashboard>
            <Partners></Partners>
        </div>
    );
};

export default Home;