import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2 bg-yellow-50 rounded-lg shadow-sm">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-pink-500 hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32 rounded-lg" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold text-green-700">{item.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold text-green-700">
          ${item.price}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-pink-100 text-2xl flex items-center justify-center hover:bg-pink-200 cursor-pointer duration-300 border-[1px] border-pink-300 rounded-full"
          >
            -
          </span>
          <p className="text-green-700">{item.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-pink-100 text-2xl flex items-center justify-center hover:bg-pink-200 cursor-pointer duration-300 border-[1px] border-pink-300 rounded-full"
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg text-green-700">
          <p>${item.quantity * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
