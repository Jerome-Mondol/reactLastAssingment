// import React from 'react'
// import RateCard from '../components/RateCard'

// const Italia = () => {

//     const cards = [
//         {
//             id: 1,
//             img: "/card1.png",
//             hoverImg: "/card3.png",
//             name: "Bottega",
//             desc: "A fine dining experience like no other.",
//             rating: 5.0,
//             reviews: 876,
//           },
//           {
//             id: 2,
//             img: "/card2.png",
//             hoverImg: "/card4.png",
//             name: "Bistro",
//             desc: "Classic flavors with a modern twist.",
//             rating: 4.5,
//             reviews: 542,
//           },
//           {
//             id: 3,
//             img: "/card3.png",
//             hoverImg: "/card2.png",
//             name: "Café Delight",
//             desc: "Cozy atmosphere with artisanal coffee.",
//             rating: 4.0,
//             reviews: 678,
//           },
//     ]

//   return (
//     <div className="pl-15 italiaHome w-full h-[60vh] relative" >
//         <div className="logo absolute bottom-[-70px] left-[46vw]">
//             <img src="../../public/ItaliaLogo.png" alt="" />
//         </div>
//         <h1 className="text py-5  text-md font-bold">Home / BellaItalia</h1>
//         <div className="text-white flex flex-col gap-10">
//             <h1 className="font-bold text-white text-4xl" >Bella italia</h1>
//             <p>⭐⭐⭐⭐⭐ 5.0 (69 reviews)</p>
//             <p>The lorem ipsum is, in printing, a series of meaningless words <br/> used temporarily to calibrate a layout. <br/>
//                The lorem ipsum is, in printing, a series of meaningless words <br/> used temporarily to calibrate a layout.</p>

//             <div className="location">
//                 <p>Singapour, Bishan-Ang Mo Kio Park </p>
//             </div>

//             <div className="time">
//                 <p>7j/7, 08:00 - 22:00</p>
//             </div>
//         </div>



//         <div className="mt-50">
//         <h1 className="text-2xl font-bold mb-3" >Discover our magnificent place in photos</h1>
//         <p className="text-md text-gray-400 my-5" >The lorem ipsum is, in printing, a series of meaningless words used temporarily to <br/>  calibrate a layout.The lorem ipsum is, in printing.</p>
//         <img src="../../public/ItaliaHome.png" alt="" className="rounded-2xl"/>
//         </div>

//         <div className="info flex justify-between my-20 items-center w-[90%]">
//             <div className="texts flex flex-col gap-5 p-10">
//                 <h1 className="font-bold text-2xl" >More information</h1>
//                 <p>See the menu</p>
//                 <p>+847 87 37 29 01</p>
//                 <p>Singapour, Bishan</p>
//                 <p>7j/7, 08:00 - 22:00</p>
//                 <p>www.bellaitalia.com</p>
//             </div>

//             <div className="img">
//                 <img src="../../public/smallMap.png" alt="" />
//             </div>
//         </div>

//         <hr/>
//         <div className="ratings flex items-center w-[90%]">
//             <div className="overall flex flex-col gap-5 p-10">
//                 <h1 className="font-bold text-3xl" >Overall rating</h1>
//                 <p>834 reviews</p>
//                 <p>⭐⭐⭐⭐⭐</p>
//             </div>
//             <div className="stats">
//                 <img src="../../public/ratings.png" alt="" />
//             </div>
//         </div>
//         <hr/>

//         <RateCard />


//         <button>Show more reviews</button>

//         <h1>Also discover...</h1>

//         const Card = ({ img, hoverImg, name, desc, rating, reviews }) => {
//           const [imageSrc, setImageSrc] = useState(img);

//           return (
//             <div className="card bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 overflow-hidden">
//               <img
//                 src={imageSrc}
//                 alt={name}
//                 className="w-full h-48 object-cover transition-all duration-300"
//                 onMouseEnter={() => setImageSrc(hoverImg)}
//                 onMouseLeave={() => setImageSrc(img)}
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold">{name}</h2>
//                 <p className="text-gray-600 text-sm mt-1">{desc}</p>

//                 {/* Star Rating */}
//                 <div className="flex items-center text-yellow-400 mt-3">
//                   {[...Array(5)].map((_, i) => (
//                     <i
//                       key={i}
//                       className={`ri-star-fill ${
//                         rating >= i + 1 ? "text-yellow-400" : "text-gray-300"
//                       }`}
//                     ></i>
//                   ))}
//                   <span className="text-gray-500 text-sm ml-2">
//                     ({reviews} reviews)
//                   </span>
//                 </div>
//               </div>
//             </div>
//           );
//         };
//     </div>
//   )
// }

// export default Italia


import React, { useState } from "react";
import RateCard from "../components/RateCard";
import Footer from "../components/Footer";

const Card = ({ img, hoverImg, name, desc, rating, reviews }) => {
  const [imageSrc, setImageSrc] = useState(img);

  return (
    <div className="card bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-48 object-cover transition-all duration-300"
        onMouseEnter={() => setImageSrc(hoverImg)}
        onMouseLeave={() => setImageSrc(img)}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{desc}</p>

        {/* Star Rating */}
        <div className="flex items-center text-yellow-400 mt-3">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`ri-star-fill ${
                rating >= i + 1 ? "text-yellow-400" : "text-gray-300"
              }`}
            ></i>
          ))}
          <span className="text-gray-500 text-sm ml-2">
            ({reviews} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

const Italia = () => {
  const cards = [
    {
      id: 1,
      img: "/card1.png",
      hoverImg: "/card3.png",
      name: "Bottega",
      desc: "A fine dining experience like no other.",
      rating: 5.0,
      reviews: 876,
    },
    {
      id: 2,
      img: "/card2.png",
      hoverImg: "/card4.png",
      name: "Bistro",
      desc: "Classic flavors with a modern twist.",
      rating: 4.5,
      reviews: 542,
    },
    {
      id: 3,
      img: "/card3.png",
      hoverImg: "/card2.png",
      name: "Café Delight",
      desc: "Cozy atmosphere with artisanal coffee.",
      rating: 4.0,
      reviews: 678,
    },
  ];

  return (
    <div className="pl-16 italiaHome w-full h-[60vh] relative">
      <div className="logo absolute bottom-[-70px] left-[46vw]">
        <img src="/ItaliaLogo.png" alt="Italia Logo" />
      </div>
      <h1 className="text py-5 text-md font-bold">Home / BellaItalia</h1>
      <div className="text-white flex flex-col gap-10">
        <h1 className="font-bold text-white text-4xl">Bella Italia</h1>
        <p>⭐⭐⭐⭐⭐ 5.0 (69 reviews)</p>
        <p>
          The lorem ipsum is, in printing, a series of meaningless words <br />{" "}
          used temporarily to calibrate a layout. <br />
          The lorem ipsum is, in printing, a series of meaningless words <br />{" "}
          used temporarily to calibrate a layout.
        </p>

        <div className="location">
          <p>Singapore, Bishan-Ang Mo Kio Park</p>
        </div>

        <div className="time">
          <p>7j/7, 08:00 - 22:00</p>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-bold mb-3">
          Discover our magnificent place in photos
        </h1>
        <p className="text-md text-gray-400 my-5">
          The lorem ipsum is, in printing, a series of meaningless words used
          temporarily to <br /> calibrate a layout. The lorem ipsum is, in
          printing.
        </p>
        <img src="/ItaliaHome.png" alt="Italia Home" className="rounded-2xl" />
      </div>

      <div className="info flex justify-between my-20 items-center w-[90%]">
        <div className="texts flex flex-col gap-5 p-10">
          <h1 className="font-bold text-2xl">More information</h1>
          <p>See the menu</p>
          <p>+847 87 37 29 01</p>
          <p>Singapore, Bishan</p>
          <p>7j/7, 08:00 - 22:00</p>
          <p>www.bellaitalia.com</p>
        </div>

        <div className="img">
          <img src="/smallMap.png" alt="Map" />
        </div>
      </div>

      <hr />
      <div className="ratings flex items-center w-[90%]">
        <div className="overall flex flex-col gap-5 p-10">
          <h1 className="font-bold text-3xl">Overall rating</h1>
          <p>834 reviews</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="stats">
          <img src="/ratings.png" alt="Ratings" />
        </div>
      </div>
      <hr />

      <RateCard />

      <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-md">
        Show more reviews
      </button>

      <h1 className="mt-10 text-2xl font-bold">Also discover...</h1>

      <div className="flex gap-5 my-10 justify-center scale-150 mt-30">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    <div className="mt-50" >
        <Footer />
    </div>
    </div>


  );
};

export default Italia;
