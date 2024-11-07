import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful payment submission
    setPaymentSuccess(true);
  };

  return (
    <div className="max-w-container mx-auto px-4 bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 rounded-md p-6 shadow-lg">
      <Breadcrumbs title="Payment gateway" className="text-pink-600" />
      <div className="pb-10">
        <p className="text-lg text-green-800 font-semibold">
          Payment gateway only applicable for Production build.
        </p>

        {paymentSuccess ? (
          <div className="mt-6 text-green-700 text-xl font-semibold bg-green-100 p-4 rounded-md">
            Payment Successful! Thank you for your purchase.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded-md shadow-md border border-yellow-300">
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-lg font-medium text-pink-600">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9101 1121"
                className="w-full h-10 mt-2 px-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expiryDate" className="block text-lg font-medium text-pink-600">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full h-10 mt-2 px-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-lg font-medium text-pink-600">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                className="w-full h-10 mt-2 px-4 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-pink-500 text-white text-lg mt-4 hover:bg-pink-700 duration-300 rounded-md"
            >
              Pay Now
            </button>
          </form>
        )}

        <Link to="/">
          <button className="w-52 h-10 bg-green-500 text-white text-lg mt-4 hover:bg-green-700 duration-300 rounded-md">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
