import React from 'react';
import { NavLink } from 'react-router-dom';


const Product = ({ product }) => {
    const { name, id, imageLink, category, price } = product || {}
    return (
        <section>
            <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={imageLink} alt="Shoes" className='h-[200px]' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className='font-semibold'>Price:- {price}$</p>
                        <div className="card-actions justify-end">
                            <NavLink to={`/product_info/${id}`}>
                                <button className="btn btn-primary">Buy Now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;