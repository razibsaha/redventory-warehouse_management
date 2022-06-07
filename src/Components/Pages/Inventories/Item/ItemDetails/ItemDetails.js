import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [reload, setIsReload] = useState(true);
  // const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `https://red-inventory.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [reload]);


  const handleRestock = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;

    const itemDelivered = { quantity };
    console.log(itemDelivered);

    const url = `https://red-inventory.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemDelivered),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`success`, data);
        alert("added successfully");
        setIsReload(!reload);
        event.target.reset();
      });
  };

  const handleDelivered = () => {
    console.log("clicked");

    // send update to the server
    const quantity = item.quantity - 1;
    const sold = item.sold + 1;

    const itemDelivered = { quantity, sold };

    console.log(itemDelivered);

    const url = `https://red-inventory.herokuapp.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemDelivered),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(!reload);
        console.log(`success`, data);
        alert("decreased successfully");
      });
  };

  
  return (
    <div className="mx-auto w-75 lg:mt-40 mt-24">
      <h1 className="text-center name">Items Details</h1>

      <div className="md:flex sm:flex-col md:flex-row justify-center py-12 md:px-2 px-4">
        <div className="xl:w-2/6 lg:w-2/5 md:block hidden">
          <img className="" alt={item.name} src={item.image} />
          <p className="xl:pr-5 text-base lg:leading-tight leading-normal text-slate-400 dark:text-gray-300 mt-7">
            {item.description}
          </p>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col items-center justify-between mt-3 space-x-4 md:space-x-0">
            <div>
              <img 
              className="w-full" 
              src={item.image} 
              alt={item.name} />
            </div>
            <div>
              <p className="xl:pr-5 text-base lg:leading-tight leading-normal text-slate-400 dark:text-gray-300 mt-7">
                {item.description}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6 md:p-12">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none bg-[#fbdfb7] bg-width-auto px-3 py-2 rounded-full font-bold text-slate-800 ">
              <span className="bg-[#fbdfb7]">{item.category}</span>
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {item.name}
            </h1>
          </div>
          <div className="py-1 border-b pt-1 border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              <strong>ID : </strong>{" "}
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                {item._id}
              </p>
            </div>
          </div>
          <div className="py-1 border-b pt-1 border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              <strong>Price : </strong>
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                ${item.price}
              </p>
            
            </div>
          </div>
          <div>
            <div className="flex justify-start items-center mt-3">
            <p className="text-base leading-4 text-gray-600 dark:text-gray-300">
              <strong> Quantity: </strong> {item.quantity}
            </p>
            <p className="text-base leading-4 text-gray-300 dark:text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="text-base leading-4 text-gray-600 dark:text-gray-300">
              <strong>Sold : </strong> {item.sold}
            </p>
            </div>
            <p className="text-base leading-4 mt-2 text-gray-600 dark:text-gray-300">
              <strong> Supplier: </strong> {item.supplier}
            </p>
          </div>
          <div>
            <button
              onClick={handleDelivered}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-[#ee316b] w-full py-3 hover:bg-[#842d72] rounded-lg focus:outline-none"
            >
              Delivered
            </button>
            <div>
              <form onSubmit={handleRestock} className="mt-3 flex w-full">
                <input
                  type="number"
                  name="quantity"
                  className="rounded-l-lg pl-3 py-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 w-full bg-white"
                  placeholder="Number"
                />
                <input
                  type="submit"
                  value="Restok"
                  className="py-3 rounded-r-lg hover:bg-[#842d72] hover:border-[#842d72] bg-[#ee316b]  text-slate-100 font-bold p-4 uppercase border-[#ee316b] border-t border-b border-r"
                />
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
