import React from "react";

const ActivityCard = () => {
  return (
    <div className="activityCard bg-gray-100 p-5 rounded-xl h-full w-[35%] ">
      <div className="profile flex gap-5 items-center">
        <i className="ri-user-line text-3xl"></i>
        <div className="name">
          <h1>Leslie sakho</h1>
          <p className="text-gray-400 text-sm">Canada, toronto</p>
        </div>
      </div>
      <div className="ratings mt-5 flex ">
        {[...Array(5)].map((_, i) => (
            <i class="ri-star-s-fill"></i>
        ))}
        <p className="text-sm ml-3">09/11/2023</p>
      </div>
      <div className="text text-gray-500">
        <p className="text-sm" >The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
        <p className="text-sm mt-10" >The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
      </div>
      <div className="images flex gap-2 w-[80%] mt-5 mr
      -5">
        <img src="../../public/smallImage1.png" alt="" />
        <img src="../../public/smallImage2.png" alt="" />
        <img src="../../public/smallImage3.png" alt="" />
      </div>
      <a href="#" className="underline mt-20 font-bold text-2xl " >Discover</a>
    </div>
  );
};

export default ActivityCard;
