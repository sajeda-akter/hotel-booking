import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 my-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://hotelchantelle.com/wp-content/uploads/2023/09/2319.webp" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="lg:w-2/4 me-10">
            <h1 className="text-3xl font-bold">Why you choose us?</h1>
            <p className="py-6 "></p>Our services is so flexiable.Book a hotel in Bangladesh online. Hotels from budget to luxury. Good rates. No reservation costs. Read hotel reviews from real guests.
            <button className="btn btn-primary mt-6 ml-28 w-52"> 
            <Link to='/rooms'>Get Satrted</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default About;