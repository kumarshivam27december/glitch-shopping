import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Vase"
          price="35.00"
          color="Black and White"
          badge={true}
          des="This elegant flower vase brings a touch of sophistication to any room, featuring a classic black-and-white design that complements any decor style."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="A modern, durable backpack designed for style and function. Perfect for daily commutes or travel, with ample storage and a sleek, minimalist look."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household Essentials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="A versatile set of household essentials, blending functionality with a chic aesthetic. Ideal for organizing and enhancing your living space."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="A spacious and durable travel bag, crafted for adventurers. This bag combines ample storage with a stylish design, ready for any journey."
        />
      </div>
    </div>
  );
};

export default BestSellers;
