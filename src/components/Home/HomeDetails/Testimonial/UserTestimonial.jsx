import { Rating, Star } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "swiper/css/autoplay"

'./UserTestimonial.css'
const AutoplaySlider = withAutoplay(AwesomeSlider);
const myStyles = {
  itemShapes: Star,
  activeFillColor: "#FFC436",
  inactiveFillColor: "#FFC436",
};

const UserTestimonial = () => {
    const [reviews, setReview] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-category-0004-server.vercel.app/reviews")
      .then((data) => {
        setReview(data.data);
      });
  }, []);


    return (
        <div>
             <h1 className="w-80 mx-auto lg:w-2/4 border-y-2 border-slate-400 p-2 text-2xl lg:text-4xl text-center mt-24 lg:mb-6 mb-12 font-bold">
          Clients Testimonial
        </h1>
            <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        classNameName="h-96"
      >
        {reviews.map((review) => (
          <div
            className="bg-white lg:w-3/4   md:w-3/4 p-1 mt-44 lg:mt-0 lg:p-12 text-center rounded-xl "
            key={review._id}
          >
          
            <img
              src={review.img}
              className="lg:w-24 lg:h-24 w-16 h-16 rounded-full mx-auto my-4"
              alt=""
            />
            <p>{review.comment.slice(0, 260)}...</p>
            <p className="text-2xl font-bold">{review.customer}</p>
            
            <p className="lg:ml-96  md:ml-44 mb-44 lg:mb-0 mt-4  ml-28">
              <Rating
              classNameName="w-32"
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

export default UserTestimonial;