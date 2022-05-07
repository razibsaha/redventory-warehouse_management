import React from 'react';

const Footer = () => {
    return (
        <div className='absolute left-0 right-0 bottom-0 container-fluid md:flex justify-center items-start pl-5 pr-5 pt-3 pb-3 mx-auto bg-slate-900 text-slate-500 gap-[55px]'>
            <section className='w-[250px]'>
            <h1 className='font-semibold text-slate-200'>Logo</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sequi doloribus vero sit rem cum dignissimos velit error, illum explicabo saepe necessitatibus veritatis vitae ipsum at consequatur non possimus sint?</p>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200'>Product Listing</h1>
            <p>Add Your Product</p>
            <p>Sell Your Product</p>
            <p>Keep Tracking</p>
            <p>Update anytime</p>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200'>More About Us</h1>
            <p>Career</p>
            <p>Blog</p>
            <p>Shipping Terms</p>
            <p>New Stores</p>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200'>News</h1>
            <p>We got new investors</p>
            <p>1000 Paid Subscriptions!</p>
            <p>Now in more than 50 cities</p>
            <p>Listed in top 10 Emerging Company</p>
            </section>
            

        </div>
    );
};

export default Footer;