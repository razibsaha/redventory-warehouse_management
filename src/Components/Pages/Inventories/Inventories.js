import React, { useState } from 'react';

const Inventories = () => {
    const [items, setItems] = useState([])
    
    return (
        <div className='container mx-auto flex justify-center items-center mt-5'>
            <h1>Inventories</h1>
        </div>
    );
};

export default Inventories;