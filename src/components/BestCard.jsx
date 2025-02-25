import React from 'react';
const BestCard = () => {
  const lilCard = [
    {
      id: 1,
      img: "../../public/smallImage1.png",
      name: "The Snug",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: 4.5,
      review: 654
    },
    {
      id: 2,
      img: "../../public/smallImage2.png",
      name: "Cozy Haven",
      desc: "A perfect little retreat with a warm ambiance and a relaxing atmosphere.",
      rating: 4.7,
      review: 892
    },
    {
      id: 3,
      img: "../../public/smallImage3.png",
      name: "Urban Nest",
      desc: "A stylish and compact space designed for comfort and tranquility.",
      rating: 4.3,
      review: 523
    },
    {
      id: 4,
      img: "../../public/smallImage1.png",
      name: "The Hideout",
      desc: "A quiet and peaceful spot, ideal for unwinding and escaping the noise.",
      rating: 4.6,
      review: 748
    },
    {
      id: 5,
      img: "../../public/smallImage2.png",
      name: "Serene Corner",
      desc: "A calm and refreshing space that brings peace and relaxation to your day.",
      rating: 4.8,
      review: 921
    },
    {
      id: 6,
      img: "../../public/smallImage3.png",
      name: "Minimalist Den",
      desc: "A sleek and modern design that maximizes space while maintaining comfort.",
      rating: 4.4,
      review: 615
    },
    {
      id: 7,
      img: "../../public/smallImage1.png",
      name: "Tranquil Spot",
      desc: "A small yet comfortable getaway that offers a cozy atmosphere for relaxation.",
      rating: 4.7,
      review: 789
    }
  ];

  return (
    <div className="bestCard flex flex-col justify-between  p-10 text-gray-400 gap-5 w-fit">
        <p className="text-black font-bold ml-10">Home / All restaurants</p>
        <h1 className="text-black font-bold ml-10 text-3xl" >best restaurants in singapore</h1>

      {lilCard.map(({ id, img, name, desc, rating, review }) => (
        <div key={id} className="flex flex-row items-center gap-3 p-5 rounded-lg w-fit">
          <img src={img} alt={name} className="rounded-lg w-52 h-40 object-cover" />
          <div>
          <h1 className="font-semibold text-lg text-gray-800 text-left">{name}</h1>
          <p className="text-sm text-gray-600 w-48 text-left">{desc}</p>
          <div className="flex items-center gap-2">
            {/* Star Rating System */}
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`ri-star-${i < Math.floor(rating) ? "fill" : i < rating ? "half-fill" : "line"} text-yellow-400 text-lg`}
              ></i>
            ))}
            <p className="text-sm text-gray-500">{review} reviews</p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default BestCard;
