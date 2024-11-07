import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);

  useEffect(() => {
    let price = 0;
    products.forEach((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 400) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  return (
    <div className="max-w-container mx-auto px-4 py-8">
      <Breadcrumbs title="Cart" />

      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-pink-100 text-pink-700 hidden lgl:grid grid-cols-5 place-items-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>

          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-green-500 text-white font-semibold uppercase mt-6 hover:bg-green-700 transition duration-300"
          >
            Reset cart
          </button>

          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0 mt-6 bg-yellow-50 rounded-lg">
            <div className="flex items-center gap-4">
              <input
                className="w-44 mdl:w-52 h-8 px-4 border text-green-700 text-sm outline-none border-gray-400"
                type="text"
                placeholder="Coupon Code"
              />
              <button className="bg-green-500 text-white py-1 px-4 font-semibold text-sm hover:bg-green-700 transition duration-300">
                Apply Coupon
              </button>
            </div>
            <button className="text-lg font-semibold bg-green-500 text-white py-1 px-4 hover:bg-green-700 transition duration-300">
              Update Cart
            </button>
          </div>

          <div className="max-w-7xl flex justify-end mt-8">
            <div className="w-full mdl:w-96 flex flex-col gap-4 bg-yellow-50 p-4 rounded-lg shadow-md">
              <h1 className="text-2xl font-semibold text-right text-pink-700">Cart totals</h1>
              <div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-400 py-1.5 px-4">
                  <p className="text-lg font-medium text-pink-700">Subtotal</p>
                  <span className="font-semibold font-titleFont text-green-700">
                    ${totalAmt.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-gray-400 py-1.5 px-4">
                  <p className="text-lg font-medium text-pink-700">Shipping Charge</p>
                  <span className="font-semibold font-titleFont text-green-700">
                    ${shippingCharge.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 px-4">
                  <p className="text-lg font-medium text-pink-700">Total</p>
                  <span className="font-bold text-lg font-titleFont text-green-700">
                    ${(totalAmt + shippingCharge).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Link to="/paymentgateway">
                  <button className="w-52 h-12 bg-green-500 text-white text-lg hover:bg-green-700 transition duration-300 rounded-lg">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="Empty Cart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-yellow-50 flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase text-pink-700">
              Your Cart is empty
            </h1>
            <p className="text-sm text-center mt-2 px-4 text-green-700">
              Your shopping cart is currently empty. Add items to your cart and
              return here to complete your purchase.
            </p>
            <Link to="/shop">
              <button className="mt-4 bg-green-500 rounded-md px-8 py-2 text-lg text-gray-200 hover:bg-green-700 transition duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
