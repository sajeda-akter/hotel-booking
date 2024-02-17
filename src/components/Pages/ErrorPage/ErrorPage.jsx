import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
              <Helmet>
    <meta charSet="utf-8" />
      <title> Hotel Comfort || Error Page</title>
    </Helmet>
            <img className="w-8/12 mx-auto mt-12" src="https://static.vecteezy.com/system/resources/thumbnails/006/549/647/small_2x/404-landing-page-free-vector.jpg" alt="" />
        <div className="w-52 mx-auto my-8">
        <Link to='/'><button className="border-2 border-[#016A70] hover:bg-[#35A29F] p-4 rounded-md hover:text-white font-medium w-72 mx-auto text-2xl">Go back to home</button></Link>

        </div>
        </div>
    );
};

export default ErrorPage;