import React from 'react'

const Italia = () => {
  return (
    <div className="pl-15 italiaHome w-full h-[60vh] relative" >
        <div className="logo absolute bottom-[-70px] left-[46vw]">
            <img src="../../public/ItaliaLogo.png" alt="" />
        </div>
        <h1 className="text py-5  text-md font-bold">Home / BellaItalia</h1>
        <div className="text-white flex flex-col gap-10">
            <h1 className="font-bold text-white text-4xl" >Bella italia</h1>
            <p>⭐⭐⭐⭐⭐ 5.0 (69 reviews)</p>
            <p>The lorem ipsum is, in printing, a series of meaningless words <br/> used temporarily to calibrate a layout. <br/>
               The lorem ipsum is, in printing, a series of meaningless words <br/> used temporarily to calibrate a layout.</p>

            <div className="location">
                <p>Singapour, Bishan-Ang Mo Kio Park </p>
            </div>

            <div className="time">
                <p>7j/7, 08:00 - 22:00</p>
            </div>
        </div>



        <div className="mt-50">
        <h1 className="text-2xl font-bold mb-3" >Discover our magnificent place in photos</h1>
        <p className="text-md text-gray-400 my-5" >The lorem ipsum is, in printing, a series of meaningless words used temporarily to <br/>  calibrate a layout.The lorem ipsum is, in printing.</p>
        <img src="../../public/ItaliaHome.png" alt="" className="rounded-2xl"/>
        </div>
    </div>
  )
}

export default Italia
