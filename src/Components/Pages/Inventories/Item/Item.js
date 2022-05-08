import React from "react";

const Item = ({ item }) => {
  const { name, category, image, description, sold, supplier, quantity } = item;
  return (
    <div className="flex justify-evenly m-2">
      <div className="flex flex-col w-[350px] mx-auto bg-gray-800 rounded-lg">
        <img
          className="rounded-lg content-start rounded-b-none object-cover object-top h-[350px] w-full bg-gray-100 p-2"
          src={image}
          alt={name}
          loading="lazy"
        />
        <div className="flex justify-between -mt-4 px-4">
          <span className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 py-2">
            {category}
          </span>
          <span className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.4,2.5c0.1,0.5,0.1,1,0.2,1.4c0,0.1,0,0.2-0.1,0.3C9.2,4.8,9.4,5.4,9.9,5.8c0.5,0.3,1.2,0.2,1.6-0.3
	C12,5,11.9,4.3,11.5,3.8c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.3-0.1-0.5-0.1-0.9c0.4,0.1,0.8,0.1,1.1,0.2c0.2,0.1,0.3,0.3,0.3,0.5
	c0.1,0.5,0.1,1,0.2,1.5c0.1,1,0.1,2,0.1,3c0,0.4-0.1,0.7-0.4,0.9c-2.1,2-4.1,4.1-6.2,6.2c-0.6,0.6-1.2,0.6-1.8,0
	c-1.4-1.4-2.7-2.7-4.1-4.1c-0.6-0.6-0.6-1.2,0-1.8c2.1-2.1,4.2-4.2,6.3-6.3C6.8,2.6,7,2.5,7.1,2.5C7.9,2.5,8.6,2.5,9.4,2.5z
	 M8.5,7.5c0.1-0.1,0.3-0.3,0.5-0.4C8.8,6.9,8.6,6.7,8.4,6.6C8.2,6.7,8.1,6.9,7.9,7C7.7,6.9,7.5,6.9,7.4,6.8C6.9,6.6,6.4,6.7,6,7.1
	C5.6,7.4,5.5,7.9,5.6,8.4c0.1,0.2,0.2,0.5,0.3,0.7C6,9.4,6.1,9.6,6.1,9.8c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.4,0.1-0.5,0
	C5.2,10.2,5,10,4.8,9.7C4.6,9.5,4.5,9.2,4.4,8.9C4.1,9.1,3.9,9.2,3.5,9.4c0.2,0.4,0.5,0.8,0.8,1.3c-0.2,0.1-0.4,0.3-0.5,0.4
	c0.2,0.2,0.3,0.4,0.5,0.7c0.2-0.2,0.4-0.4,0.5-0.6c0.1,0.1,0.2,0.1,0.3,0.2c0.6,0.3,1.2,0.3,1.7-0.2c0.5-0.4,0.6-0.9,0.4-1.6
	C7.2,9.2,7.1,9,7,8.8C6.9,8.6,6.8,8.4,6.8,8.2C6.7,7.9,7.1,7.6,7.4,7.8C7.6,8,7.8,8.2,8,8.4C8.1,8.6,8.2,8.8,8.3,9
	c0.3-0.2,0.5-0.3,0.8-0.5C8.9,8.2,8.7,7.9,8.5,7.5z M15.2,2.3C15,0.9,13.7-0.1,12.3,0c-1.4,0.1-2.5,1.3-2.5,2.8
	c0,0.6,0.2,1.3,0.3,1.9c0.1,0.3,0.3,0.5,0.6,0.4C11,5.1,11.1,4.9,11,4.5c-0.1-0.5-0.2-1.1-0.3-1.6c-0.1-1.1,0.6-1.9,1.7-2
	c1-0.1,1.8,0.6,1.9,1.6c0.1,0.8,0,1.5-0.2,2.2C14,5.4,13.7,6,13.5,6.5c-0.1,0.3-0.1,0.5,0.2,0.6c0.2,0.1,0.5,0.1,0.6-0.2
	c0,0,0-0.1,0.1-0.1c0.6-1.2,0.9-2.4,1-3.9C15.3,2.8,15.3,2.6,15.2,2.3z"
              />
            </svg>
            <p className="text-blue-500 font-semibold text-xs">Sold : {sold}</p>
          </span>
        </div>
        <div className="py-2 px-4">
          <h1 className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer">
            
              <p
                href="#"
                className="text-blue-100 "
                data-bs-toggle="tooltip"
                title={name}
              >
                {name.slice(0,20)+'...'}
              </p>
            
          </h1>
        </div>
        <div className="px-4 space-y-2">
          <p className="text-gray-400 font-normal leading-5 tracking-wide">
            {description.slice(0, 120) + "..."}
          </p>
        </div>
        <div className="flex flex-row items-end h-[100px]  w-full px-4 mt-4">
          <div className="flex border-t border-gray-700 w-full py-4">
            <div className="flex items-center space-x-3 border-r border-gray-700 w-full">
              <img
                className="object-cover w-8 h-8 border-2 border-white rounded-full"
                src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                alt="profile users"
                loading="lazy"
              />
              <div className="">
                <p className="text-sm font-semibold tracking-wide text-gray-200">
                  {supplier}
                </p>
                <p className="text-xs font-light tracking-wider text-gray-300">
                  2 Hours ago
                </p>
              </div>
            </div>
            <div className="flex items-center flex-shrink-0 px-2">
              <div className="flex -center space-x-1 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <p className="font-medium">{quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
