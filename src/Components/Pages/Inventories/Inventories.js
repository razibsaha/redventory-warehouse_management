import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './Item/Item';

const Inventories = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://red-inventory.herokuapp.com/inventories')
        .then(res=>res.json())
        .then(data=>setItems(data.slice(0,6)))
    },[])
    const navigateToInventories = () => {
        navigate('/manageinventories');
      };
    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-center name mb-5'>Our Inventories</h1>
            <div className='container md:flex flex-wrap justify-center items-center gap-5'>
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
            </div>
            <div className='flex justify-center items-center mt-2'>
                <button onClick={() => navigateToInventories()} className='px-2 py-3 text-[#ee316b]'>Manage All Items</button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ee316b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
            </div>
        </div>
    );
};

export default Inventories;