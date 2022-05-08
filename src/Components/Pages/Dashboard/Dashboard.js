import React from 'react';
import backgrounddb from '../../../Assets/Images/dashboard-bg.png'

const Dashboard = () => {
    return (
        <div className="wrapper md:flex justify-center items-center p-10" >
            <div>
                <h1>Your all-in-one dashboard on cloud</h1>
                <p>✓ Track overall health of your business in real time</p>
                <p>✓ Keep an eye on your quotation to order conversion</p>
                <p>✓ Get timely payment by automated notifications and reminders</p>
                
            </div>
            <div>
                <img className='m-5' style={{width: '40vh'}} src={backgrounddb} alt="" />
                </div>
            
        </div>
    );
};

export default Dashboard;