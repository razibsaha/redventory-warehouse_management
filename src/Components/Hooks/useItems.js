import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('https://red-inventory.herokuapp.com/inventories')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])

    return [items,setItems]
}

export default useItems;
