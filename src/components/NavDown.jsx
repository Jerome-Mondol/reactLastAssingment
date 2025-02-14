import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavDown = () => {
  const [selectedIndex, setSelectedIndex] = useState(1); // Default selected: "Restaurants"

  const icons = [
    { icon: <i className="ri-layout-grid-line"></i>, text: "All", link: "/all" },
    { icon: <i className="ri-restaurant-2-line"></i>, text: "Restaurants", link: "/" },
    { icon: <i className="ri-hotel-line"></i>, text: "Hotels", link: "/hotels" },
    { icon: <i className="ri-home-5-line"></i>, text: "Home services", link: "/home-services" },
    { icon: <i className="ri-shopping-bag-line"></i>, text: "Shopping", link: "/shopping" },
    { icon: <i className="ri-car-line"></i>, text: "Car location", link: "/car-location" },
    { icon: <i className="ri-brush-line"></i>, text: "Beauty & Spa", link: "/beauty-spa" },
    { icon: <i className="ri-parent-fill"></i>, text: "Park", link: "/park" },
    { icon: <i className="ri-album-fill"></i>, text: "Museum", link: "/museum" },
    { icon: <i className="ri-car-washing-line"></i>, text: "Car wash", link: "/car-wash" },
    { icon: <i className="ri-database-fill"></i>, text: "Bars", link: "/bars" },
    { icon: <i className="ri-weight-line"></i>, text: "Gyms", link: "/gyms" },
  ];

  return (
    <div className="navDown flex justify-between items-center p-7 text-gray-400">
      {icons.map(({ icon, text, link }, index) => (
        <NavLink
          to={link}
          key={index}
          className={({ isActive }) =>
            `flex justify-center items-center flex-col cursor-pointer transition-all duration-200
            ${selectedIndex === index || isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"}`
          }
          onClick={() => setSelectedIndex(index)}
        >
          <div className="text-2xl">{icon}</div>
          <p>{text}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default NavDown;
