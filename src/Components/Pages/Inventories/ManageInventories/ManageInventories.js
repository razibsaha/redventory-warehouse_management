import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import useItems from "../../../Hooks/useItems";

const ManageInventories = () => {
  const [items,setItems] = useItems([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  
  const linkToAddInventory = () =>{
      navigate('/additems')
  }
  
  const handleDelete = (id) =>{
      const proceed = window.confirm('Are you sure?');
      if(proceed){
          const url = `https://red-inventory.herokuapp.com/inventory/${id}`
          fetch(url, {
              method: 'DELETE' 
          })
          .then(res=>res.json())
          .then(data => { 
              console.log(data)
              const remaining = items.filter(item => item._id !== id)
              setItems(remaining);
          })

      }
  }

  return (
    <section className="container mx-auto p-6 lg:mt-32 mt-16">
        <h1 className="text-center name">All Inventories : <span className="text-[#ee316b]">{items.length}</span></h1>
        <div className="flex justify-center items-center mt-4">
        
        { user? (<button onClick={()=>{linkToAddInventory()}} className="content-center bg-[#ee316b] px-3 py-2 text-white rounded-sm hover:bg-[#842d72]">+ Add Inventory</button>):(<button className="content-center bg-slate-300 px-3 py-2 text-white rounded-sm disabled">+ Add Inventory</button>)}
        </div>
      <div className="w-full mt-24 mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="flex text-md font-semibold tracking-wide text-left text-slate-200 bg-slate-800 uppercase border-b border-gray-600">
                <th className="px-4 py-3 w-[350px]">Name</th>
                <th className="px-4 py-3 w-[100px]">Quantity</th>
                <th className="px-4 py-3 w-[100px]">Sold</th>
                <th className="px-4 py-3 w-[200px]">Supplier</th>
                <th className="px-4 py-3 w-[200px]">Category</th>
                <th className="px-4 py-3 w-[400px]">Delete</th>
              </tr>
            </thead>
            {
                items.map(item =>  <div key={item._id} item={item}> 
                
                <tbody className="bg-white">
              <tr className="text-gray-700">
                <td className="px-4 py-3 border">
                  <div className="flex items-center text-sm w-[320px]">
                    <div className="w-[100px] mx-3">
                      <img
                        className="object-cover w-full h-full p-1"
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="w-[320px]">
                      <p className="font-semibold text-black">{item.name}</p>
                      <p className="text-xs text-gray-600">{item._id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-ms font-semibold border w-[100px]">{item.quantity}</td>
                <td className="px-4 py-3 text-ms font-semibold border w-[100px]">{item.sold}</td>
                <td className="px-4 py-3 text-sm border w-[200px]">{item.supplier}</td>
                <td className="px-4 py-3 text-xs border w-[300px]">
                  <span className="px-3 py-2 font-semibold leading-10 text-slate-800 bg-[#fbdfb7] rounded-sm">{item.category}
                  </span>
                </td>
                <td className="flex justify-center px-4 py-5 text-xs w-[250px] h-full border">
                <div className="m-2">
                {user ? (
                        <button onClick={() => {
                            navigate(`/inventory/${item._id}`);
                          }} className="px-6 py-2 font-semibold leading-tight text-white bg-[#ffb037] hover:bg-[#fbdfb7] rounded-md">Edit</button>
                      ) : (
                        <button className="px-6 py-2 font-semibold leading-tight text-white bg-gray-300 rounded-md cursor-not-allowed disabled">Edit</button>
                      )}
                </div>
                {user ? (
                        <button onClick={()=>handleDelete(item._id)} className="px-6 py-2 font-semibold leading-tight text-white bg-[#ee316b] hover:bg-[#842d72] rounded-md">Delete</button>
                      ) : (
                        <button className="px-6 py-2 font-semibold leading-tight text-white bg-gray-300 rounded-md disabled cursor-not-allowed">Delete</button>
                      )}
                </td>
                
              </tr>
            </tbody>
            </div>
                    
                )
            }
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageInventories;
