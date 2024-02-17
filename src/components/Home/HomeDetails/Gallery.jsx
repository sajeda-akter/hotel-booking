import { useRef } from "react";

const Gallery = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    console.log("Video is playing");
    // Add any additional logic you need when the video starts playing
  };

  const handlePause = () => {
    console.log("Video is paused");
    // Add any additional logic you need when the video is paused
  };

  const handleEnded = () => {
    console.log("Video has ended");
    // Add any additional logic you need when the video ends
  };
  return (
    <div>
      <h1 className="w-96 mx-auto lg:w-2/4 border-y-2 border-slate-400 p-2 text-2xl lg:text-4xl text-center mt-24 mb-12 font-bold">
        Our Image Gallery And Video
      </h1>
      <div className="flex lg:flex-row flex-col justify-between gap-4">
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/Qbt8NvcEpY0?si=Nesm5DlzJnz2wFNp"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
        className="w-full h-96"
          src="https://www.youtube.com/embed/4K6Sh1tsAW4?si=ZR51oI0b7Gk-Tbg_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="mt-6 grid lg:grid-cols-4 grid-cols-2">
        <img
          className="w-96 h-60"
          src="https://media.istockphoto.com/id/486967874/photo/interior-classic-decor-bedroom.jpg?s=612x612&w=0&k=20&c=eqjPw9-oenfOsUu3GrBLDqjjpFVUzFnAs3VeW8n1Un8="
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1614505241498-80a3ec936595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwbGFuZCUyMHJvb218ZW58MHx8MHx8fDA%3D"
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/477403162/photo/patio-of-a-water-bunglow-at-a-maldives-island-resort.webp?b=1&s=170667a&w=0&k=20&c=LNmu9dS9alL5rueTzTQskDApe7Kb6JYtP8_GSEBR020="
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/1353140785/photo/christmas-celebration-at-cozy-cottage.webp?b=1&s=170667a&w=0&k=20&c=GDqH_gPsB23H6W6bTXIDUIg8t-ugSp8hc1Aqm0gkRzk="
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWluJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/1270113359/photo/3d-render-of-a-luxurious-interior-of-a-winter-cottage.webp?b=1&s=170667a&w=0&k=20&c=PFovfFC0QJVUoaK56c9U9OP2xdjSS-BxaJjQlnSYFfM="
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/1491352519/photo/traditional-wooden-house-of-the-kalasha-people.webp?b=1&s=170667a&w=0&k=20&c=uqF6oclOQVl76HIHjzOpnVGm7Ff2B4M5o0CMT1wgkDY="
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/505530020/photo/exterior-of-modern-building-near-pond-at-twilight.webp?b=1&s=170667a&w=0&k=20&c=NCh402bQT_BZG1tscSrFDldWzSCH2DOdZUqTfsI4U_c="
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1618506487216-4e8c60a64c73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-96  h-60"
          alt=""
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/1461079820/photo/interiror-view-of-the-kitchen-of-a-adi-tribe-at-siang-district-arunachal-pradesh-india.webp?b=1&s=170667a&w=0&k=20&c=vYjttZ2YPOZU5fiIXHoyPeAPzpmqEGyDOeBeIfduW38="
          className="w-96 h-60"
          alt=""
        />
        <img
          src="https://media.istockphoto.com/id/172697719/photo/old-english-library.webp?b=1&s=170667a&w=0&k=20&c=0fbJ2m0MzWJP9e4nHnziPbn5Us_h0kic-pVjTqbC5_g="
          className="w-96 h-60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
