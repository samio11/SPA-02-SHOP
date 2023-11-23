import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product';
const Home = () => {
    const product_data = useLoaderData();
    return (
        <section>
            {/* Banner Section */}
            <div className='h-[40vh] flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 mb-5'>
                <div className="join">
                    <input className="input input-bordered join-item" placeholder="Search Product" />
                    <button className="btn join-item rounded-r-full">Search</button>
                </div>
            </div>
            {/* Products section */}
            <div className='mb-5'>
                <h2 className='text-center font-bold text-xs md:text-2xl'>All Avilable Products</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4'>
                {
                    product_data?.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </section>
    );
};

export default Home;