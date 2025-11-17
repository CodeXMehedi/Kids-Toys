import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Navbar from './Navbar';
import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();
import DocumentMeta from 'react-document-meta';
import Footer from './Footer';

const PersonalDetails = () => {

  const { user, setUser } = use(AuthContext);

  const meta = {
    title: "Personal Details | Kids Toys Market",
    description: "View and update your personal profile information.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "profile, user details, update profile, kids toys account"
      }
    }
  };
  const newProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateProfile(auth.currentUser, {
      displayName:  name , photoURL:  photo 
    }).then(() => {
      setUser({
        ...user,
        displayName: name,
        photoURL: photo
      });
    }).catch((error) => {
      console.log(error);
    });

  }
  return (
    <>
    <DocumentMeta {...meta}>
    <div >

      <Navbar></Navbar>
      <div className='lg:w-8/12 w-11/12  m-auto my-10'>
        <div className='flex flex-col lg:flex-row  justify-center gap-4 items-center text-lg'>
          <img className=' max-w-7/12  max-h-110 border-2 border-gray-500' src={user.photoURL} alt="" />
          <div>
            <h2 ><span className='font-bold'>Name:</span>   {user.displayName}</h2>
            <h2><span className='font-bold'>Email :</span>   {user.email}</h2>
            <p className='font-semibold text-xl text-center mt-4'>If you want to update profile</p>
            <form onSubmit={newProfile} className="card-body  ">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" required />
                <label className="label">Photo URL</label>
                <input name='photo' type="text" className="input" placeholder="Photo URL" required />

                <button type='submit' className="btn btn-neutral mt-4 text-lg">Update Profle</button>

              </fieldset>
            </form>
          </div>
        </div>
        
        
    </div>
        </div>
        <Footer></Footer>
      </DocumentMeta>
    </>
  );
};

export default PersonalDetails;