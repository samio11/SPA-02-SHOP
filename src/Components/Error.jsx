import React from 'react';
import Lottie from 'lottie-react';
import error1 from './Error_data.json'

const Error = () => {
    return (
        <div className='text-center text-xs lg:text-3xl'>
            <div className='h-[70vh] w-[100%] flex justify-center items-center '>
                <Lottie className='h-[50%] w-[50%]' animationData={error1}></Lottie>
            </div>
            <div>
                <p>Opps!Error Occure</p>
            </div>
        </div>

    );
};

export default Error;