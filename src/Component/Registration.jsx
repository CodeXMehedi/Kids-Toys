
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';


const Registration = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    createUser(email, password).then((result) => {
      const user = result.user;
      // console.log(user);
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
        })
        .catch((error) => {
          console.log(error);
          setUser(user);
        });
      
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, errorCode);
      // ..
    });
  }
  return (
    <div className='flex justify-center items-center  min-h-screen'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='text-center font-semibold text-2xl  '>Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Name" required />

            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <button type='submit' className="btn btn-neutral mt-4 text-lg">Register</button>
            <p className='font-semibold text-center pt-5 text-lg'>Allready have an account? <NavLink to='/auth/login' className="text-red-500">Login</NavLink></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Registration;