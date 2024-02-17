import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";


const Login = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {signIn,googleSignin}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
  

    const handleLogin=(data)=>{
      const email=data.email;
      const password=data.password;
      signIn(email,password)
      .then(result=>{
          const user={email}
        // axios.post('https://assignment-category-0004-server.vercel.app/jwt',user,{withCredentials:true})
        // .then(res=>{
        //   console.log(res.data)
        // })
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully user login",
          showConfirmButton: false,
          timer: 1000,
        });

        navigate(location.state?location.state:'/')
      })
reset()

    }
    const handleGoogle=()=>{
      googleSignin()
      .then(result=>{
    
        // const user={email:result.user.email}
        // axios.post('https://assignment-category-0004-server.vercel.app/jwt',user,{withCredentials:true})
        // .then(res=>{
        //   console.log(res.data)
        // })
      })
      .catch(err=>console.log(err))
    }
  
    return (
       <div>
          <Helmet>
    <meta charSet="utf-8" />
      <title>Hotel Comfort || Login Page</title>
    </Helmet>
         <div className="hero min-h-screen " style={{backgroundImage: 'url(https://media.istockphoto.com/id/1435234356/photo/cyber-security-concept-login-user-identification-information-security-and-encryption-secure.jpg?s=612x612&w=0&k=20&c=eUz5LACuMeG1cEkjXIhqmDlgPV0uJZF7jkEIzjHV_HI=)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="card  w-full max-w-xs mt-16 md:max-w-md lg:max-w-xl shadow-2xl bg-base-100">
        <h1 className="bg-[#016A70] text-center lg:text-4xl text-2xl text-white font-extrabold py-6 rounded-t-xl">Please Login Here</h1>
      <form className="card-body " onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control text-xl">
          <label className="label">
            <span className="label-text text-xl text-[#016A70]">Email</span>
          </label>
        
          <input type="email" placeholder="Enter your email" {...register('email',{required:"Email must be required"})} className="input input-bordered  text-[#016A70]"  />
        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-[#016A70]">Password</span>
          </label>
          <input type="password" placeholder="Enter your password" {...register('password',{required:"Password must be required"})} className="input input-bordered text-[#016A70] "  />

          {errors.password && <p className="text-red-600 text-xl">{errors.password?.message}</p>}
<div className="flex justify-center items-center gap-12">
<label className="label">
            <a href="#" className="label-text-alt link link-hover text-[15px] ">Forgot password?</a>
          </label>
        <p>Do you have a account? <span className="text-[#016A70] font-bold"><Link to="/signup" >Signup</Link></span></p>
        
</div>
        </div>
        <div className="flex justify-around gap-4 mt-1">
            <button className="border-2 border-[#016A70] hover:bg-[#35A29F] w-32 text-center rounded-md px-2 py-3 hover:text-[#FFFBF5]"
             onClick={handleGoogle}
             >Google</button>
            <button className="border-2 border-[#016A70] w-32 text-center rounded-md px-2 py-3 hover:text-[#FFFBF5] hover:bg-[#35A29F]">Github</button>
        </div>
        <div className="divider text-[#016A70] font-medium">OR</div>
        <div className="form-control mt-2">
        <input type="submit" value="Login" className=" rounded-md p-3 border-2 w-52 md:w-72 lg:w-80 mx-auto border-[#016A70] hover:bg-[#35A29F] hover:text-[#FFFBF5] text-xl uppercase font-medium"/>
        </div>
      </form>
    </div>

        </div>
       </div>
      
    );
};

export default Login;