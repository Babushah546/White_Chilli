import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const { name, photoURL } = data;

    try {
      await updateUserProfile(name, photoURL);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile. Please check the console for more details.");
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className='font-bold'>Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input {...register("name", { required: true })} type="text" placeholder="Your name" className="input input-bordered" />
            {errors.name && <span className="text-red-500">Name is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
            {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
            {/* TODO: Uploading image will be later */}
            {/* <input type="file" className="file-input w-full max-w-xs" /> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
