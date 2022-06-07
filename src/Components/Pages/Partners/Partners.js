import React from 'react';
import partnerimage from '../../../Assets/Images/partners.jpg'

const Partners = () => {
    return (
        <div className='container mx-auto mb-5'>
           <div className='flex justify-center items-center font-bold pb-4'>
           <h1 className='name'>Our Trusted Partners</h1>
           </div>
           <img src={partnerimage} alt="" /> 
        </div>
    );
};

export default Partners;