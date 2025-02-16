import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import ActivityCard from "../components/activityCard";
import Footer from "../components/Footer";

// Navigation Data
const navItems = [
  { icon: "ri-layout-grid-line", text: "All", link: "/all" },
  { icon: "ri-restaurant-2-line", text: "Restaurants", link: "/" },
  { icon: "ri-hotel-line", text: "Hotels", link: "/hotels" },
  { icon: "ri-home-5-line", text: "Home services", link: "/home-services" },
  { icon: "ri-shopping-bag-line", text: "Shopping", link: "/shopping" },
  { icon: "ri-car-line", text: "Car location", link: "/car-location" },
  { icon: "ri-brush-line", text: "Beauty & Spa", link: "/beauty-spa" },
  { icon: "ri-parent-fill", text: "Park", link: "/park" },
  { icon: "ri-album-fill", text: "Museum", link: "/museum" },
  { icon: "ri-car-washing-line", text: "Car wash", link: "/car-wash" },
  { icon: "ri-database-fill", text: "Bars", link: "/bars" },
  { icon: "ri-weight-line", text: "Gyms", link: "/gyms" },
];

// Card Data
const cardsData = [
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
  {
    id: 4,
    img: "/card4.png",
    hoverImg: "/card1.png",
    name: "Steakhouse",
    desc: "Premium cuts, grilled to perfection.",
    rating: 3.5,
    reviews: 432,
  },
];

const trendCards = [
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
  {
    id: 4,
    img: "/card4.png",
    hoverImg: "/card1.png",
    name: "Steakhouse",
    desc: "Premium cuts, grilled to perfection.",
    rating: 3.5,
    reviews: 432,
  },
  {
    id: 5,
    img: "/card1.png",
    hoverImg: "/card3.png",
    name: "Bottega",
    desc: "A fine dining experience like no other.",
    rating: 5.0,
    reviews: 876,
  },
  {
    id: 6,
    img: "/card2.png",
    hoverImg: "/card4.png",
    name: "Bistro",
    desc: "Classic flavors with a modern twist.",
    rating: 4.5,
    reviews: 542,
  },
  {
    id: 7,
    img: "/card3.png",
    hoverImg: "/card2.png",
    name: "Café Delight",
    desc: "Cozy atmosphere with artisanal coffee.",
    rating: 4.0,
    reviews: 678,
  },
  {
    id: 8,
    img: "/card4.png",
    hoverImg: "/card1.png",
    name: "Steakhouse",
    desc: "Premium cuts, grilled to perfection.",
    rating: 3.5,
    reviews: 432,
  },
  {
    id: 9,
    img: "/card1.png",
    hoverImg: "/card3.png",
    name: "Bottega",
    desc: "A fine dining experience like no other.",
    rating: 5.0,
    reviews: 876,
  },
  {
    id: 10,
    img: "/card2.png",
    hoverImg: "/card4.png",
    name: "Bistro",
    desc: "Classic flavors with a modern twist.",
    rating: 4.5,
    reviews: 542,
  },
  {
    id: 11,
    img: "/card3.png",
    hoverImg: "/card2.png",
    name: "Café Delight",
    desc: "Cozy atmosphere with artisanal coffee.",
    rating: 4.0,
    reviews: 678,
  },
  {
    id: 12,
    img: "/card4.png",
    hoverImg: "/card1.png",
    name: "Steakhouse",
    desc: "Premium cuts, grilled to perfection.",
    rating: 3.5,
    reviews: 432,
  },
];

// Navigation Menu Component
const NavMenu = ({ selectedIndex, onSelect }) => (
  <nav className="flex justify-between items-center p-7 text-gray-400">
    {navItems.map(({ icon, text, link }, index) => (
      <NavLink
        key={index}
        to={link}
        className={({ isActive }) =>
          `flex flex-col items-center text-sm transition-all duration-200 cursor-pointer ${
            selectedIndex === index || isActive
              ? "text-blue-500 font-semibold"
              : "hover:text-blue-500"
          }`
        }
        onClick={() => onSelect(index)}
      >
        <i className={`text-2xl ${icon}`} aria-hidden="true"></i>
        <span>{text}</span>
      </NavLink>
    ))}
  </nav>
);

// Card Component
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

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(1); // Default: "Restaurants"

  const handleSelect = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <NavMenu selectedIndex={selectedIndex} onSelect={handleSelect} />

      {/* Cards Section */}
      <section className="p-7 bg-blue-500 w-[90%] mx-auto mt-5 rounded-lg">
        <h1 className="text-2xl font-semibold mb-5 text-white">
          Find the best restaurant ratings below
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Trending Cards Section */}
      <section className="p-7 w-[90%] mx-auto mt-5 rounded-lg">
        <h1 className="text-2xl font-semibold mb-5">The latest trends</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Discover More Button */}
      <div className="text-center mt-10">
        <h1 className="text-xl my-5">Discover more cool restaurants</h1>
        <button className="p-2 bg-blue-500 rounded-4xl text-white px-10">
          Show more
        </button>
      </div>

      {/* Feedback */}
      <div className="feedback flex mx-auto w-[90%] mt-20 justify-between items-center px-20">
        <div className="feedbackText">
          <h1 className="text-2xl font-bold">
            MyFeedback for Business has <br /> resources to help you plan,
            start, <br /> grow, and advertise your small business
          </h1>
          <p className="text-md mt-10">
            The lorem ipsum is, in printing, a series of meaningless words{" "}
            <br /> used temporarily to calibrate a layout.
          </p>
          <button className="bg-black px-7 py-3 text-white rounded-4xl cursor-pointer mt-10">
            MyFeedback for business
          </button>
        </div>
        <div className="feedbackImage">
          <img src="../../public/lastCard.png" alt="Image" />
        </div>
      </div>
      <div className="mt-20" >
        <h1 className=" text-3xl font-bold w-[80%] mx-auto mb-10" >Recents avtivities</h1>
      <div className="flex mx-auto w-[80%] gap-20" >
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      </div>
      <Footer />
      <div className="copyright w-[50%] mx-auto text-center my-10 font-bold">
        Copyright© Jerome Mondol | {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Home;
