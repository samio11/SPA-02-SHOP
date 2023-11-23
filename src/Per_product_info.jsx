import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
const Per_product_info = () => {
    const data1 = useParams()
    const { id } = data1 || 0
    const [loadData1, LoadData] = useState([])
    useEffect(() => {
        fetch(`/Data.json`)
            .then(req => req.json())
            .then(data => LoadData(data))
    }, [id])
    const d1 = loadData1.find(p1 => p1.id == id)
    const { category, description, imageLink, name, price } = d1 || {}
    const sweet = () => {
        Swal.fire({
            icon: "error",
            title: "Product Already Added in the Cart",
            text: "You Cant Added"
        });
    }
    const addedCart = () => {
        const saveLocal = [];
        const favourite = JSON.parse(localStorage.getItem('data'));
        // If there is no data in local storage
        if (!favourite) {
            saveLocal.push(d1);
            localStorage.setItem('data', JSON.stringify(saveLocal))
            toast("🛒Product added Succesfully")
        }
        // If there is a data in local storage it can be same
        else {
            const isExist = favourite.find(f1 => f1.id == id)
            if (isExist) {
                sweet()
            }
            // There is no same data so we can add previous data + new Data
            else {
                saveLocal.push(...favourite, d1)
                localStorage.setItem('data', JSON.stringify(saveLocal))
                toast("🛒Product added Succesfully")
            }
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={imageLink} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{category}</p>
                        <p className="py-6">{description}</p>
                        <p className="py-6">Price:- {price}$</p>
                        <div className='flex justify-center items-center'>
                            <div>
                                <button onClick={addedCart} className='btn btn-outline btn-warning'>Add to Cart</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Per_product_info;