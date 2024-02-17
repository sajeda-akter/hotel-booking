import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import "./Navbar.css";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // user logout button handle
  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully user logout",
        showConfirmButton: false,
        timer: 500,
      });
    });
    navigate("/login");
  };

  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      

      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/myBooking">My Booking</NavLink>
      </li>
   
  
    </>
  );
  const handleToOpen = () => {
    document.getElementById("navmenu").classList.remove("hidden");
    const menu = document.querySelectorAll("li");
    for (const li of menu) {
      li.addEventListener("click", () => {
        document.getElementById("navmenu").classList.add("hidden");
      });
    }
  };

  return (
    <div className="navbar bg-[#35A29F] z-30  sticky top-0 lg:text-[#FFFBF5]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleToOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            id="navmenu"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
         
          </ul>
        </div>

        <a className="btn btn-ghost text-xl lg:ml-24">
          <img
            className="w-12 h-12 rounded-md "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQaeaA7HO8fdX0Ur5k0O3ShGEujjdz4ExFg&usqp=CAU"
            alt=""
          />
          <p className="font-extrabold ">
            <span className="text-red-600 space-x-3">COM</span>FORT
          </p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{menuItems}</ul>
      </div>
      <div className="navbar-end me-12">
        {user ? (
          <button className="font-bold me-3" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div className="flex items-center gap-6">
            <p className="font-bold">
              <Link to="/login">Login</Link>
            </p>
            <img
              className="w-12 h-12 rounded-full"
              src="https://i.ibb.co/Q8zMwbP/users.png"
              alt=""
            />
          </div>
        )}
        {user && (
          <img
            src={user.photoURL}
            title={user?.displayName}
            className="w-12 h-12 rounded-full"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
