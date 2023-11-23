import React from 'react';
import Lottie from 'lottie-react';
import sign from './SignIn.json'

const Signin = () => {
    return (
        <div className='h-auto md:h-[80vh] flex flex-col md:flex-row-reverse justify-between items-center m-3 md:m-10'>
            <div className='flex-1'>
                <Lottie className='h-[60%] w-auto' animationData={sign}></Lottie>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>

                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;