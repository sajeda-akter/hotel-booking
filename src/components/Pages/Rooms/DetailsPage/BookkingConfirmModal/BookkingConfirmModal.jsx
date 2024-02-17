import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";

const BookkingConfirmModal = (
 
  {
  isBuyModalOpen,
  setIsBuyModalOpen,
  onCloseBuyModal,
  rooms,
  startDate,
}) => {

  const { user } = useContext(AuthContext);
  const {
    _id,
    image,
    roomSize,
    specialOffer,
    price,
  } = rooms;
  const [book, setBook] = useState([]);
  const navigate=useNavigate()

  const getFetch=()=>{

    axios.get('https://assignment-category-0004-server.vercel.app/booking'
    // ,{ params: { email: user?.email },withCredentials: true,}
    )
    .then(res=>
      setBook(res.data)
    )
  }


  useEffect(() => {

  getFetch()
  });
  const handleReFetch=()=>{
    getFetch()
  }


  const idCheck = book.find((bk) => bk?.roomId === rooms?._id);
  const date=moment(startDate).format("yyyy-MM-DD")
  const handleBooking = () => {
    handleReFetch
    if (!idCheck) {
      const newBooking = {
        image,
        roomSize,
        price,
        date,
        specialOffer,
        roomId: _id,
        customer: user.displayName,
        email: user.email,
      };
      axios.post("https://assignment-category-0004-server.vercel.app/booking", newBooking).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully booking",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate('/reviews')
          setIsBuyModalOpen(false);
        }
      });
    }
     else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "It's already booked ",
        showConfirmButton: false,
        timer: 1000,
      });
      setIsBuyModalOpen(false);

    }
  };

  return (
    <div>
      <dialog
        id="bookingModal"
        className="modal "
        open={isBuyModalOpen}
        onClose={onCloseBuyModal}
      >
        <div className="modal-box w-10/12 lg:w-full">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        <div className="flex justify-between items-center mb-3 gap-32">
        <h3 className="font-bold text-lg">{roomSize}</h3>
          <p className=" font-extrabold">${price}</p>
          
        </div>
          <p>Offer: {specialOffer}</p>
          <p>Check-in-date: {moment(startDate).format("yyyy-MM-DD")}</p>
          <button
            className="btn w-2/4 mx-auto lg:ml-32 ml-20 md:ml-28 mt-8 btn-primary"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
      </dialog>
    </div>
  );
};

BookkingConfirmModal.propTypes={
  isBuyModalOpen:PropTypes.func,
  setIsBuyModalOpen:PropTypes.func,
  onCloseBuyModal:PropTypes.func,
  rooms:PropTypes.object,
  startDate:PropTypes.object,
}
export default BookkingConfirmModal;
