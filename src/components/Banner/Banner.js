import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#333",
                borderRight: "3px solid #ff7e67",
                padding: "8px 0",
                cursor: "pointer",
                backgroundColor: "#ffecd1",
                borderRadius: "5px",
                transition: "all 0.3s ease",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px solid #fff",
                padding: "8px 0",
                cursor: "pointer",
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
                transition: "all 0.3s ease",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#333",
                      borderRight: "3px solid #ff7e67",
                      cursor: "pointer",
                      fontSize: "12px",
                      backgroundColor: "#ffecd1",
                      borderRadius: "5px",
                      transition: "all 0.3s ease",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px solid #fff",
                      cursor: "pointer",
                      fontSize: "12px",
                      backgroundColor: "#e0e0e0",
                      borderRadius: "5px",
                      transition: "all 0.3s ease",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-gradient-to-r from-yellow-100 to-pink-200 py-8">
      <Slider {...settings}>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgOne} />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgTwo} />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgThree} />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
