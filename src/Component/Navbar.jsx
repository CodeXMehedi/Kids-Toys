import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user,logOut } = use(AuthContext);

  const handleLogOut = () => {
    console.log("Trying to LogOut");
    logOut()
      .then(() => {
        alert("Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = <>
    <nav className='flex gap-4 text-white text-lg'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/AvailableToy'>Available Toys</NavLink>
    </nav>
  </>

  return (
    <div className='bg-[#F28500] shadow-sm sticky top-0 opacity-70 '>
      <div className="navbar w-11/12 m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
              
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl italic text-white ">Cats Eye</a>
          <div className='w-10 h-10'>{user && user.photoURL}</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-4">
          <NavLink to='/checkCart' className='flex gap-2'>
            <span><ShoppingCart /></span>
            <span>Check Cart</span>
          </NavLink>
          {user ? <button onClick={handleLogOut} className="btn bg-[#FBE8D3] text-yellow-800 text-lg">Log Out</button> : <Link to="/auth/login" className="btn bg-[#FBE8D3] text-yellow-800 text-lg">Login</Link>}
         
        </div>

      </div>
    </div>
  );
};

export default Navbar;