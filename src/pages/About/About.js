import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "Home");
  }, [location]);

  return (
    <div className="about-container">
      <Breadcrumbs title="About" prevLocation={prevLocation} />

      <div className="content-section">
        <h1 className="heading">
          <span className="highlight-green">Glitch</span> - Redefining Fashion for the Modern World
        </h1>

        <div className="description">
          <p>
            <span className="highlight-yellow">Glitch</span> is not just an e-commerce platform; it’s a destination for style enthusiasts worldwide. With an emphasis on both heritage and contemporary aesthetics, we offer a diverse selection of apparel, accessories, and more that embodies timeless elegance and cutting-edge fashion.
          </p>
          <p className="mt-4">
            As a brand, <span className="highlight-green">Glitch</span> focuses on quality, authenticity, and a commitment to sustainability. Our products are sourced from ethical suppliers and designed with care, ensuring that each piece not only meets high standards but also contributes to a positive impact on the world.
          </p>
        </div>

        <div className="text-base sm:text-lg mb-10 text-gray-600 transition-all duration-300 hover:text-gray-800">
          <p>
            Whether you’re looking to elevate your everyday wardrobe or searching for exclusive, limited-edition pieces, <span className="highlight-pink">Glitch</span> offers an unparalleled selection. Each item on our site is handpicked by fashion experts who understand the nuances of global style and the desires of today’s sophisticated shopper.
          </p>
          <p className="mt-4">
            Our customer experience is as important as our product range. With easy navigation, secure checkout, and worldwide shipping, <span className="highlight-yellow">Glitch</span> ensures a seamless shopping journey from browsing to purchase and beyond.
          </p>
        </div>

        <div className="cta-button-container">
          <Link to="/shop">
            <button className="cta-button">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background: linear-gradient(135deg, #fdfdfd, #ffc3a0, #f3c0ff);
          border-radius: 8px;
          transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
        }

        .about-container:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
        }

        .content-section {
          padding-top: 30px;
          padding-bottom: 50px;
        }

        .heading {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.2;
          color: #e11d48;
          transition: color 0.3s ease-in-out;
        }

        .heading:hover {
          color: #facc15;
        }

        .highlight-green {
          color: #10b981;
        }

        .highlight-yellow {
          color: #facc15;
        }

        .highlight-pink {
          color: #ec4899;
        }

        .description {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 32px;
          color: #374151;
          transition: color 0.3s ease-in-out;
        }

        .description:hover {
          color: #1f2937;
        }

        .cta-button-container {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .cta-button {
          background-color: #ec4899;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 8px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .cta-button:hover {
          background-color: #10b981;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default About;
