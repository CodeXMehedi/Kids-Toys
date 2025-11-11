import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {
  return (
    <div className='flex justify-center items-center  min-h-screen'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 ">
        <h2 className='text-center font-semibold text-2xl  '>Login Your Account</h2>
        <div className="card-body ">
          <fieldset className="fieldset text-lg">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4 text-lg">Login</button>
            <p className='font-semibold text-lg text-center pt-5'>Don't have an account? <NavLink to='/auth/register' className="text-red-500">Register</NavLink></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;