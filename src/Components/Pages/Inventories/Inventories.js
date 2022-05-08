import React, { useEffect, useState } from 'react';
import Item from './Item/Item';

const Inventories = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/items')
        .then(res=>res.json())
        .then(data=>setItems(data.slice(0,6)))
    },[])

    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-center text-5xl font-bold mb-5'>Inventories</h1>
            <div className='container md:flex flex-wrap justify-center items-center gap-5'>
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
            </div>
        </div>
    );
};

export default Inventories;