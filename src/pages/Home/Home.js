import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";

const Home = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-b from-yellow-100 via-pink-100 to-green-100 p-6">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4 bg-white shadow-lg rounded-md p-6">
        {/* Section Headers */}
        <h2 className="text-2xl font-bold text-center text-pink-500 mb-4">Exclusive Sales</h2>
        <Sale />
        
        <h2 className="text-2xl font-bold text-center text-green-500 mt-12 mb-4">New Arrivals</h2>
        <NewArrivals />
        
        <h2 className="text-2xl font-bold text-center text-yellow-500 mt-12 mb-4">Best Sellers</h2>
        <BestSellers />
        
        <h2 className="text-2xl font-bold text-center text-blue-500 mt-12 mb-4">Product of the Year</h2>
        <YearProduct />
        
        <h2 className="text-2xl font-bold text-center text-red-500 mt-12 mb-4">Special Offers</h2>
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
