import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateDate = () => { 
    const booking=useLoaderData()   
    const [startDate, setStartDate] = useState(new Date());
    const date=moment(startDate).format("yyyy-MM-DD")
    const {id}=useParams()
    const updateInfo=booking.find(booked=>booked._id ===id)
    // console.log(bookedUpdate)

   const handleUpdate=(e)=>{
    e.preventDefault()
    const date=e.target.date.value ;
    const upadteDate={
        date
    }
    axios.patch(`https://assignment-category-0004-server.vercel.app/booking/${updateInfo._id}`,upadteDate)
    .then(data=>{

       if(data.data.modifiedCount>0){
            Swal.fire({
                title: "Updated!",
                text: "Your booking has been updated.",
                icon: "success",
                timer: 1000,
              });
        }
    })
    
   }
    
    return (
        <div>
             <Helmet>
      <meta charSet="utf-8" />
        <title>Hotel Comfort || Update Page</title>
      </Helmet>
      <h1 className=" text-2xl lg:text-4xl text-center font-medium my-5">Update your  booking date</h1>
    <div className="bg-slate-200  w-96 mx-auto px-12 h-96 mt-12 rounded-md">
    <form className="flex flex-col  items-center  justify-evenly" onSubmit={handleUpdate}>
        <button  className="bg-[#35A29F] p-2 my-5 w-32 rounded-md text-white">Sumit</button>

          <input defaultValue={updateInfo.date} name="date" type="date" >

          </input>
</form>
    
    </div>
        </div>
    );
};

export default UpdateDate;