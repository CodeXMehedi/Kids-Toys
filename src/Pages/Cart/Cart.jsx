import React, { useEffect, useState, useContext } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../../Component/Navbar';
import { AuthContext } from '../../provider/AuthProvider';
import { getStoredInfo } from '../utility/addToDB';
import { toast } from 'react-toastify';
import Footer from '../../Component/Footer';

const Cart = () => {
  const allToys = useLoaderData();
  const { user } = useContext(AuthContext);
  const [cartToys, setCartToys] = useState([]);

  useEffect(() => {
    if (!Array.isArray(allToys)) {
      return;
    } 
    const storedIds = getStoredInfo(); 
    const matched = allToys.filter(toy => {
      const realId = toy.toyId; 
      return storedIds.includes(realId);
    });
    setCartToys(matched);
  }, [allToys]);

  const handleDelete = (id) => {
    const remaining = cartToys.filter(toy => toy.toyId !== id);
    setCartToys(remaining);
    const stored = getStoredInfo().filter(tid => tid !== id);
    localStorage.setItem("cart", JSON.stringify(stored));
    toast("Removed from cart");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='lg:w-7/12 w-10/12 mx-auto my-10'>
        <h2 className="text-3xl font-semibold mb-4 text-center">Your Cart</h2>
        <p className='text-lg font-semibold text-center'>
          User name: {user?.displayName}
        </p>
        {cartToys.length === 0 && (
          <p className="text-lg text-gray-700 mt-4">Your cart is empty.</p>
        )}
        {cartToys.map(toy => {
          const realId = toy.toyId;
          return (
            <div key={realId} className="bg-gray-500 p-2 md:p-4 lg:p-4 rounded-xl text-white my-4 flex justify-between">
              <div className='flex-1'>
                <p className="lg:text-xl text-lg font-semibold">{toy.toyName}</p>
                <p className="font-bold">{toy.price}</p>
                <button
                  className="text-red-700 mt-3 underline"
                  onClick={() => handleDelete(realId)}
                >
                  Remove
                </button>
             </div >
              <img className='max-w-25 max-h-20 md:max-w-40 md:max-h-40 lg:max-w-40 lg:max-h-30 flex-1' src={toy.pictureURL} alt="" />
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Cart;
