
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout/Checkout";


const Payment = () => { 
  const singleUser=useLoaderData()
    const stripePromise=loadStripe(import.meta.env.VITE_REACT_PAYMENT_KEY)

    return (
        <Elements stripe={stripePromise}>
        <Checkout singleUser={singleUser} />
      </Elements>
    );
};

export default Payment;