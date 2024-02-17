import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import UpdateDate from "../components/Pages/MyBooking/UpdateDate/UpdateDate";
import MyBooking from "../components/Pages/MyBooking/MyBooking";
import PrivateRouter from "./PrivateRouter";
import Payment from "../components/Pages/Payment/Payment";
import Login from "../components/Pages/Register/Login";
import Signup from "../components/Pages/Register/Signup";
import Reviews from "../components/Pages/Reviews/Reviews";
import Rooms from "../components/Pages/Rooms/Rooms";
import DetailsPage from "../components/Pages/Rooms/DetailsPage/DetailsPage";
import Home from "../components/Home/Home";

export const routers=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/rooms',
                element:<Rooms/>
            },
           
            {
                path:'/myBooking',
                element:<PrivateRouter><MyBooking/></PrivateRouter>
            },
            {
                path:'/update/:id',
                loader:({params})=>fetch(`https://assignment-category-0004-server.vercel.app/booking/${params.id}`),
                element:<UpdateDate/>
            },
            {
                path:'/reviews',
                loader:()=>fetch('https://assignment-category-0004-server.vercel.app/booking'),
                element:<PrivateRouter><Reviews/></PrivateRouter>
            },
            {
                path:'/detailpage/:id',
                loader:({params})=>fetch(`https://assignment-category-0004-server.vercel.app/rooms/${params.id}`),
                element:<PrivateRouter><DetailsPage/></PrivateRouter>
            },
            {
                path:'/payment/:id',
                loader:({params})=>fetch(`https://assignment-category-0004-server.vercel.app/booking/${params.id}`),
                element:<Payment/>
            }
            
        ]
    }
])