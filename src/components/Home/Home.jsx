import { Helmet } from "react-helmet";
import About from "./HomeDetails/About/About";
import FeaturedRoom from "./HomeDetails/FeaturedRoom/FeaturedRoom";
import UserTestimonial from "./HomeDetails/Testimonial/UserTestimonial";
import Banner from "./HomeDetails/Banner";
import Gallery from "./HomeDetails/Gallery";
import Footer from "./Footer/Footer";

const Home = () => {
  

    return (
      <div className="  w-11/12 mt-12 mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hotel Comfort || Home Page</title>
        </Helmet>
       
      {/* <TextAnimation/> */}
        <Banner />
     <About/>
        <FeaturedRoom/>
        <Gallery />
      <UserTestimonial/>
        <Footer />
      </div>
    );
  };
  export default Home