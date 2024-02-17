

const Banner = () => {
    return (
    <div>
      <div className="hero  bg-[#186F65]  my-5 rounded-md">
    <div className="hero-content flex  flex-col lg:flex-row-reverse">
      <img  src="https://media.istockphoto.com/id/1491352519/photo/traditional-wooden-house-of-the-kalasha-people.webp?b=1&s=170667a&w=0&k=20&c=uqF6oclOQVl76HIHjzOpnVGm7Ff2B4M5o0CMT1wgkDY=" className="lg:w-3/4  rounded-lg " />
    
   <div className="flex flex-col lg:gap-3 justify-between text-white">
   <p className=" text-3xl text-center mt-5 text-white">35% discount for
          <br /><span className="font-extrabold text-white lg:text-5xl">Bijoy Dibosh</span>
        </p>
        <p className=" text-2xl lg:ml-12  mt-6 lg:mt-0 lg:-mb-4">Offer Facilities</p>
        <ul className="ml-10 lg:ml-12 ">
          <li>1.Fitness Center</li>
          <li>2.Business Center</li>
          <li>3.Pool side</li>
          <li>4.Free snack </li>
        </ul>
        <div className="card-actions w-48">
                    <button className="btn border-2  hover:text-black bg-[#016A70]  text-white text-xl w-48">
                      Action
                    </button>
                  </div>
  
   </div>
  
  
     </div>
      </div>
  
     
    </div>
  
    );
  };
  
  export default Banner;
  