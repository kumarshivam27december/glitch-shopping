import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Cap for Boys"
          price="35.00"
          color="Black and White"
          badge={true}
          des="This trendy black-and-white cap is the perfect accessory for boys who want to add a touch of style to their everyday look."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Tea Table"
          price="180.00"
          color="Gray"
          badge={true}
          des="This sleek gray tea table blends modern design with functionality, making it the perfect centerpiece for your living room."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Experience crystal-clear sound with these comfortable headphones, designed for both music lovers and casual listeners alike."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Sunglasses"
          price="220.00"
          color="Black"
          badge={true}
          des="These stylish black sunglasses offer both UV protection and a bold fashion statement, perfect for sunny days or outdoor adventures."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
