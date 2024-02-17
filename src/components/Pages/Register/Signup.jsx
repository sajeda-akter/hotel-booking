import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import axios from "axios";




// const image_hosting_key = import.meta.env.VITE_REACT_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const navigate=useNavigate()
  
  // const passRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  const { createUser, updateUserProfile,googleSignin } = useContext(AuthContext);
   const handleSignup =async (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    
    const imgFile = { image: data.image[0] };
    const imaageHosting = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_REACT_IMGBB_KEY
    }`;
    
    const res = await axios.post(imaageHosting, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if(res.data.success){
      createUser(email, password).then((result) => {
        console.log(result.user);
        const photo=res.data.data.display_url

        // update user profile
        updateUserProfile(name, photo).then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully create a user",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate('/')
        });
        reset();
      });
    }
   
    
  };


  const handleGoogle=()=>{
    googleSignin()
    .then(result=>{
      console.log(result.user)
    })
    .catch(err=>console.log(err))
  }
  return (

    <div>
        <Helmet>
    <meta charSet="utf-8" />
      <title>Hotel Comfort || Signup Page</title>
    </Helmet>
       <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1435234356/photo/cyber-security-concept-login-user-identification-information-security-and-encryption-secure.jpg?s=612x612&w=0&k=20&c=eUz5LACuMeG1cEkjXIhqmDlgPV0uJZF7jkEIzjHV_HI=)",
      }}
    >
      
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="card my-12 w-full max-w-xs md:max-w-md lg:max-w-xl shadow-2xl bg-base-100">
        <h1 className=" bg-[#016A70] text-center lg:text-4xl text-2xl text-white font-extrabold py-6 rounded-t-xl">
          Signup Here
        </h1>
        <form className="card-body " onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control text-xl">
            <label className="label">
              <span className="label-text text-xl text-[#016A70]">Name</span>
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name must be required" })}
              className="input input-bordered  text-[#016A70]"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control text-xl">
            <label className="label">
              <span className="label-text text-xl text-[#016A70]">Photo</span>
            </label>

            <input
              type="file"
              placeholder="Enter your photo"
              {...register("image", { required: "Photo must be required" })}
              className="input input-bordered  text-[#016A70]"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image?.message}</p>
            )}
          </div>
          <div className="form-control text-xl">
            <label className="label">
              <span className="label-text text-xl text-[#016A70]">Email</span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email must be required" })}
              className="input input-bordered  text-[#016A70]"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-[#016A70]">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password must be required",
              })}
              className="input input-bordered text-[#016A70] "
              required
            />

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <div className="flex justify-center items-center gap-12">
              <p>
                Do you have a account?{" "}
                <span className="text-[#016A70] font-bold ml-3">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-around gap-4 mt-2">
            <button onClick={handleGoogle} className="border-2 border-[#016A70] hover:bg-[#35A29F] w-32 text-center rounded-md px-2 py-3 hover:text-[#FFFBF5]">
              Google
            </button>
            <button className="border-2 border-[#016A70] w-32 text-center rounded-md px-2 py-3 hover:text-[#FFFBF5] hover:bg-[#35A29F]">
              Github
            </button>
          </div>
          <div className="divider text-[#016A70] font-medium">OR</div>
          <div className="form-control mt-1">
            <input
              type="submit"
              value="Signup"
              className=" rounded-md p-3 border-2 w-52 md:w-72 lg:w-80 mx-auto border-[#016A70] hover:bg-[#35A29F] hover:text-[#FFFBF5] text-xl uppercase font-medium"
            />
          </div>
        </form>
      </div>
    </div>
    </div>

  );
};

export default Signup;
