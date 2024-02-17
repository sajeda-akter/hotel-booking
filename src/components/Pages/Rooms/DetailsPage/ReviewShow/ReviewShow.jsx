

import axios from "axios";
import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Rating, Star,  } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const myStyles = {
  itemShapes: Star,
  activeFillColor: "#FFC436",
  inactiveFillColor: "#FFC436",
};

const ReviewShow = () => {
  const [reviews, setReview] = useState([]);


  useEffect(() => {
 
    axios.get("https://assignment-category-0004-server.vercel.app/reviews").then((data) => {
        setReview(data.data);
      });
    

  }, []);
  return (
    <div className="w-10/12 mx-auto rounded-md  ">
   
      <h1 className="border-y-2 border-slate-400 w-96 mx-auto p-2 text-2xl lg:text-4xl text-center mt-24 lg:mb-6 mb-12 font-bold">Our Clients Review</h1>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        className=""
      >
         {reviews.map((review) => (
          <div
            className="bg-white w-full lg:w-3/4  md:w-full p-1 md:p-0 lg:mt-2 md:mt-0 lg:p-12 text-center rounded-xl "
            key={review._id}
          >
          
            <img
              src={review.img}
              className="lg:w-24 lg:h-24 w-16 h-16  mt-44 md:mt-5 lg:mt-0 rounded-full mx-auto my-4"
              alt=""
            />
            <p className="text-[15px]">{review.comment.slice(0, 260)}...</p>
            <p className="lg:text-2xl md:text-2xl font-bold">{review.customer}</p>
            
            <p className="lg:ml-48  md:ml-44 mb-44 lg:mb-0 mt-4  ml-28">
              <Rating
              className="w-32 lg:ml-40"
                style={{ maxWidth: 150 }}
                value={review.rating}
                itemStyles={myStyles}
              />
            </p>
          </div>
        ))}
      </AutoplaySlider>
        
    </div>
  );
};

export default ReviewShow;
