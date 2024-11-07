import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4 bg-gradient-to-r from-pink-100 via-green-100 to-yellow-100 p-6 rounded-md shadow-lg">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} className="text-pink-600" />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-lg text-gray-800 mb-4 font-medium bg-white p-4 rounded-md shadow-md border-l-4 border-pink-400">
          <span className="text-pink-600 font-bold text-xl">Glitch</span> — Welcome to the Glitch Journal—where the boundaries of fashion, tech, and art collide in vibrant, unexpected ways. Here, every article is crafted to pull you into a world of digital distortion, glitch-inspired designs, and curated trends that challenge the ordinary. Dive into our stories to explore fashion’s latest frontiers, discover tech that disrupts, and find style inspiration that redefines the present. Embrace the glitch and transform your look with every page.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-12 bg-pink-500 text-white text-lg font-semibold hover:bg-pink-700 duration-300 rounded-md shadow-lg">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
