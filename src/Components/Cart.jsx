import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/CartSlice";
import { toast } from "react-toastify";

const Cart = ({ id, name, image, price, type }) => {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[400px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-orange-300 transition-all duration-50">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} className="object-cover" />
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <p className="text-xl font-bold text-orange-400">₹ {price}</p>
        <p className="flex justify-between items-center gap-2 text-xl font-bold text-orange-400">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}

          <span>{type}</span>
        </p>
      </div>
      <button
        className="w-full bg-orange-300 border-none outline-none text-xl text-white p-3 rounded-xl cursor-pointer hover:bg-orange-400 transition-all"
        onClick={() => {
          dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          );
          toast.success("Item is Added");
        }}
      >
        Add to dish
      </button>
    </div>
  );
};

export default Cart;
