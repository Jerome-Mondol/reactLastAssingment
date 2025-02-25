import React from "react";

const RateCard = () => {
  const rateCard = [
    {
      id: 1,
      img: "../../public/profile.png",
      name: "Wei Jie",
      location: "Singapore, Little India",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      id: 2,
      img: "../../public/profile.png",
      name: "Aisha Khan",
      location: "Dubai, Al Barsha",
      desc: "Great experience! The service was top-notch, and I would highly recommend it to anyone.",
    },
    {
      id: 3,
      img: "../../public/profile.png",
      name: "David Miller",
      location: "New York, Manhattan",
      desc: "Fast and efficient! I got exactly what I needed, and the process was smooth.",
    },
    {
      id: 4,
      img: "../../public/profile.png",
      name: "Satoshi Tanaka",
      location: "Tokyo, Shibuya",
      desc: "Impressed with the quality. The attention to detail was remarkable!",
    },
    {
      id: 5,
      img: "../../public/profile.png",
      name: "Maria Lopez",
      location: "Madrid, Sol",
      desc: "Loved it! The professionalism and care put into the work were evident.",
    },
    {
      id: 6,
      img: "../../public/profile.png",
      name: "John Doe",
      location: "Los Angeles, Hollywood",
      desc: "The process was seamless. I felt valued as a customer, and everything was perfect.",
    },
    {
      id: 7,
      img: "../../public/profile.png",
      name: "Emma Wilson",
      location: "London, Camden",
      desc: "Fantastic service! I couldn't be happier with the results.",
    },
    {
      id: 8,
      img: "../../public/profile.png",
      name: "Ali Hassan",
      location: "Istanbul, Beyoglu",
      desc: "Amazing experience! Will definitely be coming back for more.",
    },
    {
      id: 9,
      img: "../../public/profile.png",
      name: "Chen Wei",
      location: "Shanghai, Pudong",
      desc: "A truly outstanding experience. I was very satisfied with everything!",
    },
  ];

  return (
    <div>
      {rateCard.map((card) => (
        <div className="flex gap-5 bg-gray-50 h-40 w-[90%] p-5 m-5 rounded-lg items-center" key={card.id}>
          <img src={card.img} alt="" className="" />
          <div>
            <h1 className="font-bold text-xl">{card.name}</h1>
            
            <p>{card.location}</p>
            <p>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RateCard;
