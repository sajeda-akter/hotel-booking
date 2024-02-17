import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FeaturedRoom = () => {
  const [rooms, setRooms] = useState([]);

  // all room list data
  useEffect(() => {
    fetch("https://assignment-category-0004-server.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  
  
 
  return (
    <div>
      
           
      <div>
       {rooms.slice(0,1).map((room) => (
       
        <div key={room._id} className="bg-[#BCEAD5] card lg:card-side  shadow-xl">
  <figure><img src={room.image} alt="Album"/></figure>
  <div className="card-body">
    <p className="text-2xl font-medium">{room.roomSize}</p>
    <p className="text-4xl font-bold">${room.price}</p>
    <h2 className="card-title">{room.description}</h2>
    <p>{room.specialOffer}</p>
    <Link to={`/detailpage/${room._id}`}>
                {" "}
                <div className="card-actions w-48">
                  <button className="btn border-2 hover:border-[#704F4F] bg-[#016A70] hover:text-[#472D2D] text-white text-xl w-48">
                    See Details
                  </button>
                </div>
              </Link>
   
  </div>
</div>
        ))} 
    
      </div>
    </div>
  );
};

export default FeaturedRoom;
