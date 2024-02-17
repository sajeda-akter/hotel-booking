import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import { Helmet } from "react-helmet";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const hasBooking = bookings.find((booking) => booking.email === user?.email);

  useEffect(() => {
    axios
      .get("https://assignment-category-0004-server.vercel.app/booking"
      // ,{ params: { email: user?.email }, withCredentials:true}
      )
      .then((data) => setBookings(data.data));
  }, [user?.email]);

  const handleReview = (e) => {
    e.preventDefault();

    const rating = e.target.rating.value;
    const comment = e.target.comment.value;
    const date = e.target.date.value;
    const customer = e.target.user.value || user.displayName;

    const addReview = {
      customer,
      img: user.photoURL,
      rating,
      comment,
      date,
    };
    if (hasBooking) {
      axios.post("https://assignment-category-0004-server.vercel.app/reviews", addReview).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully add a review",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You have to booking first",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    e.target.rating.value = "";
    e.target.comment.value = "";
    e.target.date.value = "";
  };

  return (
    <div className="">
       <Helmet>
      <meta charSet="utf-8" />
        <title>Hotel Comfort || Review Add Page</title>
      </Helmet>
    

      <h1 className="border-y-2 border-slate-400  w-96 mx-auto p-2 text-2xl font-bold text-center mt-12 mb-4">
        {" "}
        Add To your review
      </h1>
      
     <form onSubmit={handleReview} className="grid grid-cols-1 gap-x-6 lg:grid-cols-2 md:grid-cols-2 w-10/12 mx-auto p-12 rounded-md bg-slate-300">
     <div className="form-control ">
  <label className="label">
    <span className="label-text lg:text-xl font-medium">UserName</span>
  </label>
  <input
    type="text"
    defaultValue={user?.displayName}
    name="user"
    placeholder="User name"
    className="input input-bordered " 
    required
    readOnly
  />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text lg:text-xl font-medium">Rating</span>
  </label>
  <input
    type="text"
    name="rating"
    placeholder="Give me some rating 5/5"
    className="input input-bordered w-full"
    required
  />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text lg:text-xl font-medium">Comment</span>
  </label>
  <input
    type="text"
    placeholder="Enter your comments"
    name="comment"
    className="input input-bordered w-full" 
    required
  />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text lg:text-xl font-medium">Timestamp</span>
  </label>
  <input
    type="text"
    placeholder="Date"
    name="date"
    defaultValue={moment().format("MMM Do yyyy")}
    readOnly
    className="input input-bordered w-full" 
    required
  />
</div>
<div className="form-control w-52 lg:w-2/4  mx-auto mt-4 md:col-span-2">
            <button className="btn btn-primary ">Submit</button>
          </div>
     </form>

    </div>
  );
};

export default Reviews;
