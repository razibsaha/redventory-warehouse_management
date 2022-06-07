import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='container mx-auto lg:mt-40 mt-24 content-center'>
            <div>  <h1 className='text-center text-5xl name'>This is Blog</h1>              
            </div>
            <div>
<section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img className='p-3' src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png" alt="" />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                  Difference between javascript and nodejs 
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Javascript is a interpreted programming language and Nodejs is a javascript runtime.
                  </p>
                  
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img className='p-3' src="https://miro.medium.com/max/600/1*NFTgwZ_TUmceZnSHCundBw.jpeg" alt="" />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                  When should you use nodejs and when should you use mongodb 
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    NodeJs is a backend javascript runtime which is used for receiving http request. And Mongodb is used for realtime noSql data. 
                  </p>
                  
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img className='p-3' src="https://miro.medium.com/max/1012/1*Z5SpsmDvk67BIImwHvh_cQ.png" alt="" />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                  Differences between sql and nosql databases. 
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    sql data are structured and follow a sequence and nosql data doesn't follow any sequence.
                  </p>
                  
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
               <img className='p-3' src="https://metamug.com/article/images/security/jwt-token-structure.svg" alt="" />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                  What is the purpose of jwt and how does it work 
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    JWT or javascript web token is a tool or authentication system for user authorization and it works both in client side and server side.
                  </p>
                  
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
            </div>
        </div>
    );
};

export default Blog;