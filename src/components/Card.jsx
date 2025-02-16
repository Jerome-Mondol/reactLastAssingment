import React from "react";

const Card = () => {
  const cards = [
    {
      id: 1,
      img: "/card1.png",
      hoverImg: "/card3.png",
      name: "Bottega",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: 5.0,
      reviews: 876,
    },
    {
      id: 2,
      img: "/card2.png",
      hoverImg: "/card4.png",
      name: "Bottega",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: 4.5,
      reviews: 876,
    },
    {
      id: 3,
      img: "/card3.png",
      hoverImg: "/card2.png",
      name: "Bottega",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: 4.0,
      reviews: 876,
    },
    {
      id: 4,
      img: "/card4.png",
      hoverImg: "/card1.png",
      name: "Bottega",
      desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      rating: 3.5,
      reviews: 876,
    },
  ];

  return (
    <div className="cardContainer p-7 bg-blue-500 w-[90%] mx-auto mt-5 rounded-lg">
      <h1 className="text-2xl font-semibold mb-5 text-white">Find the best restaurant ratings below</h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ id, name, desc, img, hoverImg, rating, reviews }) => (
          <div key={id} className="card rounded-xl shadow-lg w-[90%] bg-white">
            <img
              src={img}
              alt={name}
              className="w-full h-48 object-cover rounded-xl"
              onMouseEnter={(e) => e.target.src = hoverImg}
              onMouseLeave={(e) => e.target.src = img}
            />
            <h1 className="text-lg mt-2 p-2">{name}</h1>
            <p className="text-gray-600 px-2 text-sm"font-bold>{desc}</p>

            {/* ⭐ Star Rating Section */}
            <div className="review flex items-center mt-2 text-yellow-400 pl-2 mt-5">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`ri-star-fill ${rating >= i + 1 ? "text-yellow-400" : "text-gray-300"}`}></i>
              ))}
              <span className="text-gray-500 text-sm ml-2">({reviews} reviews)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
