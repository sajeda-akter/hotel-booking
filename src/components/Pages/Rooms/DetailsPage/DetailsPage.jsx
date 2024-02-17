import { useLoaderData } from "react-router-dom";
import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import BookkingConfirmModal from "./BookkingConfirmModal/BookkingConfirmModal";
import ReviewShow from "./ReviewShow/ReviewShow";
import { Helmet } from "react-helmet";


const DetailsPage = () => {
  const [startDate, setStartDate] = useState(new Date());

  const rooms = useLoaderData();
  const { image, description, roomSize, specialOffer, availability, price } =
    rooms;

  // Modal States
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const onCloseBuyModal = () => {
    setIsBuyModalOpen(false);
  };

  return (
   <div>
     <Helmet>
      <meta charSet="utf-8" />
        <title>Hotel Comfort || Details Page</title>
      </Helmet>
     <div className="card lg:w-10/12 w-11/12 mx-auto mt-4  bg-gray-300 shadow">
      <figure className="lg:px-10 lg:pt-10 p-4">
        <img src={image} alt={roomSize} className="lg:w-11/12  lg:h-96 rounded-xl" />
      </figure>
      <div className="card-body lg:ml-16">
        <div className="flex lg:flex-row flex-col justify-between items-center lg:space-x-44">
          <h2 className="card-title text-2xl lg:text-3xl font-bold">{roomSize}</h2>
          <p className="lg:text-2xl text-xl font-medium">
            Price Per Night: <span className="font-extrabold">${price}</span>
          </p>
        </div>
        <p className="lg:text-xl">{description}...</p>
        <p className="text-xl ">
          Special Offer: <span className="font-medium">{specialOffer}</span>
        </p>
        <p className="text-xl">
          Available:{availability === true ? "unavailable" : "available"}
        </p>
        <p className="text-xl">
          {" "}
          Booking Date:{" "}
          <DatePicker
            className="w-52 rounded-md pl-3"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
          />
        </p>
        <div className="card-actions mx-auto w-3/4 navbar-center mt-4">
          <button className="lg:w-72 lg:text-xl mt-6 btn border-2 border-[#016A70] hover:border-0 hover:bg-[#35A29F] w-44 mx-auto text-center rounded-md px-1 py-2 hover:text-[#FFFBF5]" onClick={() => setIsBuyModalOpen(true)}>
        View Before Confirm
          </button>

          <BookkingConfirmModal
            isBuyModalOpen={isBuyModalOpen}
            setIsBuyModalOpen={setIsBuyModalOpen}
            onCloseBuyModal={onCloseBuyModal}
            rooms={rooms}
            startDate={startDate}
          />
        </div>
      </div>
    </div>
    <ReviewShow/>
   </div>
  );
};

export default DetailsPage;
