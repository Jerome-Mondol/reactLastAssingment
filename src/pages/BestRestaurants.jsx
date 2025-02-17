import React from "react";
import BestCard from "../components/BestCard";

const BestRestaurants = () => {
  return (
    <div>
      <div className="flex justify-between">
        <BestCard />
        <div className="image mt-30 ">
          <img src="../../public/map.png" alt="" />
        </div>
      </div>

      <button>Show more</button>
    </div>
  );
};

export default BestRestaurants;
