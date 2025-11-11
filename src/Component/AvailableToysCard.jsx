import React from 'react';
import { Link } from 'react-router';
const AvailableToysCard = ({ toy }) => {
    
  const fullStars = Math.floor(toy.rating);
  const halfStar = toy.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (

    <div className='p-4 bg-white rounded-lg shadow-lg'>
      <img className='h-[250px]' src={toy.pictureURL} alt="" />
      <h3 className='text-xl font-semibold text-[#B8860B]'> {toy.toyName} </h3>
      <div className="flex items-center text-yellow-500">
        {"★".repeat(fullStars)}
        {halfStar && <span className="text-yellow-300">★</span>}
        {"☆".repeat(emptyStars)}
        <p className='text-lg my-2 text-[#B8860B] px-4'>{toy.rating}</p>
      </div>
      <div className='flex justify-between text-xl font-bold '>
        <p >Quantity: {toy.availableQuantity}</p>
        <p>{toy.price}</p>
      </div>
      <div className='flex justify-center my-4' >
        <Link className='btn bg-[#B8860B]'>View more</Link>
      </div>
    </div>
  );
};

export default AvailableToysCard;