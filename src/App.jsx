import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavDown from './components/NavDown';
import Navbar from './components/Navbar';
import { useState } from 'react';
import "./index.css";
import Card from './components/Card';
import Home from './pages/Home';
import BestRestaurants from './pages/BestRestaurants';
import Italia from './pages/Italia';

function App() {

    const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div>
      <div className="navBar flex justify-between items-center p-7 border border-bottom border-gray-300 pt-12">
            <div className="logo">
                <img src="./logo.png" alt="" />
            </div>
            <div className="search w-[50%] rounded-4xl flex justify-between items-center p-1 border border-gray-300">
                <input type="text"
                    className="w-[90%] h-10 pl-5 outline-none"
                    value={search}
                    placeholder='restaurant, hotel, service...    |   Singapore'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="searchIcon bg-[#1677BD] rounded-4xl flex h-10 w-10 justify-center items-center">
                    <i className="ri-search-line text-white"></i>
                </div>
            </div>
            <div className="feedback flex gap-5 items-center">
                <i class="ri-global-line text-2xl"></i>
                <button className="bg-black px-7 py-3 text-white rounded-4xl cursor-pointer" >MyFeedback for business</button>
            </div>
        </div>
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestRestaurants" element={<BestRestaurants />} />
        <Route path="/italia" element={<Italia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
