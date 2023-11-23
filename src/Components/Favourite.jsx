import React, { useEffect, useState } from 'react';
import Product from './Product';
import Swal from 'sweetalert2';
const Favourite = () => {
    const [favourite,setFavourite] = useState([])
    const [dataFound,setDataFound] = useState(false)
    useEffect(()=>{
        const fav = JSON.parse(localStorage.getItem('data'))
        if(fav){
            setFavourite(fav)
        }
        else{
            setDataFound("No Data Found")
        }
    },[])
    const sweet_remove = ()=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "🛍️ Products Deleted Seccesfully",
            showConfirmButton: false,
            timer: 1000
          });
    }
    const removeAll = ()=>{
        localStorage.clear();
        setFavourite([]);
        sweet_remove();
        setDataFound(false)
    }
    return (
        <div className='h-auto'>
            {
                favourite.length > 0 && <div className='flex justify-center items-center mb-5'>
                    <button onClick={removeAll} className='btn btn-outline btn-error'>Delete All</button>
                    
                </div>
            }
            {
                dataFound ? <p>{dataFound}</p> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>{
                    favourite?.map(p1 => <Product key={p1.id} product={p1}></Product>)
                    }</div>
            }
        </div>
    );
};

export default Favourite;