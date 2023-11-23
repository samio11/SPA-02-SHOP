import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Fixed_item = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className=''>
                <Navbar></Navbar>
            </div>
            <div className='h-auto w-full'>
             <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Fixed_item;