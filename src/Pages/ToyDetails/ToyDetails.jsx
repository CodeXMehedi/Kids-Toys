
import { Link, useLoaderData} from 'react-router';
import Navbar from '../../Component/Navbar';
import ToyDetailCard from '../../Component/ToyDetailCard';
import { ToastContainer, toast } from 'react-toastify';
import DocumentMeta from 'react-document-meta';
import { addToStoredDB } from "../utility/addToDB";
import Footer from '../../Component/Footer';

const ToyDetails = () => {
  const toyData = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Also added in the Cart")
  }

  const fullStars = Math.floor(toyData.rating);
  const halfStar = toyData.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const {toyId, toyName, sellerName, sellerEmail, price, rating, availableQuantity, description, pictureURL, subCategory } = toyData;

  const meta = {
    title: `${toyName} | Kids Toys Market`,
    description: `Buy ${toyName} in the ${subCategory} category. Seller: ${sellerName}, Price: ${price}. Available quantity: ${availableQuantity}.`,
    meta: {
      charset: "utf-8",
      name: {
        keywords: `${toyName}, ${subCategory}, toy details, kids toys, ${sellerName}`
      }
    }
  };
  return (
    <DocumentMeta {...meta}>
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='w-10/12 m-auto '>
        <h2 className='text-center text-6xl font-bold text-[#B8860B] mt-6' >Toy Details</h2>
        <h3 className='text-center text-2xl font-semibold text-[#B8860B] mt-2'>{toyName}</h3>
        <div className=' flex flex-col lg:flex-row lg:justify-center gap-4 mt-6'>
          <img className='lg:w-5/12' src={pictureURL} alt="" />
          <div className='text-lg'>
            <div className="flex  items-center text-yellow-500">
              {"★".repeat(fullStars)}
              {halfStar && <span className="text-yellow-300">★</span>}
              {"☆".repeat(emptyStars)}
              <p className='text-lg my-2 text-[#B8860B] px-4'>{rating}</p>
            </div>
            <p className='text-xl'>{description}</p>
            <p > <span className='text-[#B8860B] text-xl'>Subcategory:</span> {subCategory}</p>
            <div className='lg:flex  justify-between mt-10 font-semibold text-2xl'>
              <p>Available Quantity: {availableQuantity}</p>
              <p >{price}</p>
            </div>
            <div className='mt-6'>
              <h6 className='font-bold'>Seller:</h6>
              <p>{sellerName}</p>
              <p className='font-semibold'>Email: {sellerEmail}</p>
            </div>
          </div>
          
        </div>
        <div className='w-11/12 flex justify-center  mx-auto'>
          <div className='lg:w-4/12'>
            <h6 className='font-bold text-4xl text-center mt-4'>Try It Now!!!</h6>
            <form onSubmit={handleSubmit} className="card-body ">
              <fieldset className="fieldset text-lg">

                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" required />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" required />

                  <button onClick={() => addToStoredDB(toyId)} type='submit' className="btn btn-neutral mt-4 text-lg">Try Now</button>
                  
              </fieldset>
            </form>
          </div>
       </div>
        </main>
        <Footer></Footer>
      <ToastContainer />
      </div>
    </DocumentMeta>
  );
};

export default ToyDetails;