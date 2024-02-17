import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBooking] = useState([]);

  // get all booking which booked
  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://assignment-category-0004-server.vercel.app/booking?email=${user.email}`
          // { withCredentials: true }
        )
        .then((result) => {
          setBooking(result.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error fetching data:", error.message);
        });
    }
  }, [user.email]);

  const handleDelete = (_id) => {
    const date = bookings.find((booking) => booking._id === _id);
    const deleteBookDate = moment(date.date).format("YYYY-MM-DD");
    const specificDate = moment(deleteBookDate);

    const newDate = moment().format("YYYY-MM-DD");
    //  get day diference for deletion
    const daysDiff = specificDate.diff(moment(newDate), "days");

    if (daysDiff > 2 && daysDiff > 0) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://assignment-category-0004-server.vercel.app/booking/${_id}`
            )
            .then((data) => {
              if (data.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your booking has been deleted.",
                  icon: "success",
                  timer: 1000,
                });
                const remainging = bookings.filter(
                  (booking) => booking._id != _id
                );
                setBooking(remainging);
              }
            });
        }
      });
    } else {
      Swal.fire({
        title: "Sorry!",
        text: "You cannot cancel booking.",
        icon: "error",
        timer: 1000,
      });
    }
  };

  console.log(bookings);

  return (
    <div className="lg:w-3/4 md:w-11/12 mx-auto my-12 text-center ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hotel Comfort || My Booking Page</title>
      </Helmet>
      <h1 className="lg:text-2xl md:text-xl font-bold text-center my-6">
        You have been booking:{bookings.length}
      </h1>

      <div className="overflow-x-auto" id="table-container">
        <table className="table">
          <thead className="lg:text-xl md:text-xl ">
            <tr>
              <th></th>
              <th>Room</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status Change</th>
              <th>Booking Status</th>
            </tr>
          </thead>
          <tbody className="lg:text-xl">
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.roomSize}</td>
                <td>${booking.price}</td>
                <td>{booking.date}</td>
                <td>
                  {" "}
                  <Link to={`/update/${booking._id}`}>
                    <button className="border-2 border-[#016A70] hover:bg-[#35A29F] w-24 text-center rounded-md px-1 py-2 hover:text-[#FFFBF5]">
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="border-2 border-[#016A70] hover:bg-[#35A29F] w-24 text-center rounded-md px-1 py-2 hover:text-[#FFFBF5]"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {" "}
                  <button className="border-2 border-[#016A70] hover:bg-[#35A29F] w-24 text-center rounded-md px-1 py-2 hover:text-[#FFFBF5]">

                  <Link to={`/payment/${booking._id}`}>Pay</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
