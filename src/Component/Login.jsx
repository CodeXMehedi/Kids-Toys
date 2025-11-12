import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const { signIn } = use(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         alert(errorCode, errorMessage);
        // setError(errorCode);
      });
  }

  return (
    <div className='flex justify-center items-center  min-h-screen'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 ">
        <h2 className='text-center font-semibold text-2xl  '>Login Your Account</h2>
        <form onSubmit={handleLogIn} className="card-body ">
          <fieldset className="fieldset text-lg">

            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <div><a className="link link-hover">Forgot password?</a></div>
            <button type='submit' className="btn btn-neutral mt-4 text-lg">Login</button>
            <p className='font-semibold text-lg text-center pt-5'>Don't have an account? <NavLink to='/auth/register' className="text-red-500">Register</NavLink></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;