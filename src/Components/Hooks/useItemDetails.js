import { useEffect, useState } from "react";

const useItemDetails = (id) => {
    
    const [item,setItem] = useState({});
    useEffect(()=> {
        fetch(`https://red-inventory.herokuapp.com/inventory/${id}`)
        .then(res=>res.json())
        .then(data => setItem(data))
    }
       
    ,[id]);

    return [item]

}

export default useItemDetails;