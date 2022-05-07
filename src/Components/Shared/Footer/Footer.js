import React from 'react';

const Footer = () => {
    const day = new Date();
    const year = day.getFullYear();
    return (
        <div className='container-fluid'>
            <div className='md:flex justify-center items-start pl-5 pr-5 pt-5 pb-5 mx-auto bg-slate-900 text-slate-500 gap-[55px]'>
            <section className='w-[250px]'>
            <h1 className='font-semibold text-slate-200 pb-2'>Red-Ventory</h1>
            <p>We are a electronic items warehouse. There are like 200+ items in our storage. To keep track of all those items we use mongodb database.</p>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200 pb-2'>Product Listing</h1>
            <p>Add Your Product</p>
            <p>Sell Your Product</p>
            <p>Keep Tracking</p>
            <p>Update anytime</p>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200 pb-2'>More About Us</h1>
            <p>Career</p>
            <p>Blog</p>
            <p>Shipping Terms</p>
            <p>New Stores</p>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200 pb-2'>News</h1>
            <p>We got new investors</p>
            <p>1000 Paid Subscriptions!</p>
            <p>Now in more than 50 cities</p>
            <p>Listed in top 10 Emerging Company</p>
            </section>
            </div>
            <div className='flex justify-center bg-slate-800 text-slate-400 pt-5 pb-5'>
            Copyright ©{year} Red-Ventory.
            </div>
            

        </div>
    );
};

export default Footer;