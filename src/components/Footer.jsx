import React from "react";

const Footer = () => {
  return (
    <div className="flex mx-auto w-[80%] justify-center gap-56 my-20" >
      <div>
        <h1 className="text-2xl font-bold" >About</h1>
        <h2 className="text-gray-500 mt-2 " >About MyFeedback</h2>
        <h2 className="text-gray-500 mt-2" >Investor Relations</h2>
      </div>
      <div>
        <h1 className="text-2xl font-bold">MyFeedback</h1>
        <h2 className="text-gray-500 mt-2">MtFeedback for business</h2>
        <h2 className="text-gray-500 mt-2">Collections</h2>
        <h2 className="text-gray-500 mt-2">Talk</h2>
        <h2 className="text-gray-500 mt-2">Events</h2>
        <h2 className="text-gray-500 mt-2">MyFeedback blog</h2>
        <h2 className="text-gray-500 mt-2">Support</h2>
        <h2 className="text-gray-500 mt-2">Developers</h2>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Languages</h1>
        <h2 className="text-gray-500 mt-2">English <i class="ri-arrow-down-s-line"></i> </h2>

        <h1 className="text-2xl font-bold">Countries</h1>
        <h2 className="text-gray-500 mt-2">Singapore <i class="ri-arrow-down-s-line"></i> </h2>
      </div>
      
    </div>
  );
};

export default Footer;
