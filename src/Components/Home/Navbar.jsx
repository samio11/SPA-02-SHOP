import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='h-[15vh] flex justify-between items-center'>
            <div className=''>
                <h3 className='text-sm lg:text-3xl font-semibold'>SAMIO-SHOP</h3>
            </div>
            <div className='flex justify-evenly items-center gap-2 lg:gap-3'>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-xs lg:text-xl rounded-xl p-2 bg-black text-white" : "text-sm"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/favourite"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-xs lg:text-xl rounded-xl p-2 bg-black text-white" : "text-sm"
                    }
                >
                    Favourite
                </NavLink>
                <NavLink
                    to="/sign-in"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-xs lg:text-xl rounded-xl p-2 bg-black text-white" : "text-sm"
                    }
                >
                    Sign In
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;