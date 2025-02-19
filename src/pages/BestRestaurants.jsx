import React from "react";
import BestCard from "../components/BestCard";
import { NavLink } from "react-router-dom";

const BestRestaurants = () => {
  return (
    <div>
      <div className="flex justify-between">
        <BestCard />
        <div className="image mt-30 ">
          <img src="../../public/map.png" alt="" />
        </div>
      </div>

      <NavLink  to={"/italia"} >
        <button className="p-2 bg-blue-500 rounded-4xl text-white px-10 cursor-pointer ml-15 mb-10">
          Show more
        </button>
      </NavLink>
    </div>
  );
};

export default BestRestaurants;
