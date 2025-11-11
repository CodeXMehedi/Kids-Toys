import React from 'react';
import { NavLink } from 'react-router';


const Registration = () => {
  return (
    <div className='flex justify-center items-center  min-h-screen'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='text-center font-semibold text-2xl  '>Register Your Account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4 text-lg">Register</button>
            <p className='font-semibold text-center pt-5 text-lg'>Allready have an account? <NavLink to='/auth/login' className="text-red-500">Login</NavLink></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Registration;