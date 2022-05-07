import React from 'react';

const Footer = () => {
    return (
        <div className='absolute left-0 right-0 bottom-0 container-fluid md:flex justify-center items-center pl-5 pr-5 pt-3 pb-3 mx-auto bg-slate-900 text-slate-500 gap-5'>
            <section>
            <h1 className='font-semibold text-slate-200'>Logo</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sequi doloribus vero sit rem cum dignissimos velit error, illum explicabo saepe necessitatibus veritatis vitae ipsum at consequatur non possimus sint?</p>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200'>Category 01</h1>
            <a href="/login">Login</a>
            <a href="/signup">SignUp</a>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200'>Category 01</h1>
            <a href="/login">Login</a>
            <a href="/signup">SignUp</a>
            </section>
            <section className='flex flex-col'>
            <h1 className='font-semibold text-slate-200'>Category 01</h1>
            <a href="/login">Login</a>
            <a href="/signup">SignUp</a>
            </section>
            

        </div>
    );
};

export default Footer;