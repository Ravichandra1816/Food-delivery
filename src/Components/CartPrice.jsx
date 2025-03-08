import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartPrice = () => {
  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryFee = 40;
  let taxes = (subTotal * 0.5) / 100;
  let total = subTotal + deliveryFee + taxes;
  return (
    <>
      <div className="w-full flex flex-col border-t-2 border-b-2 border-gray-400 mt-7 gap-2">
        <div className="w-full flex items-center justify-between">
          <span className="text-lg text-gray-600 font-bold">SubTotal</span>
          <span className="text-lg text-orange-400 font-bold">
            ₹{subTotal}/-
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-lg text-gray-600 font-bold">DeliveryFee</span>
          <span className="text-lg text-orange-400 font-bold">
            ₹{deliveryFee}/-
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-lg text-gray-600 font-bold">Taxes</span>
          <span className="text-lg text-orange-400 font-bold">₹{taxes}/-</span>
        </div>
      </div>

      <div className="w-full flex items-center justify-between p-4">
        <span className="text-xl text-gray-600 font-bold">Total</span>
        <span className="text-xl text-orange-400 font-bold">₹{total}/-</span>
      </div>
      <button
        className="w-[80%] bg-orange-300 border-none outline-none text-xl text-white p-3 rounded-xl cursor-pointer hover:bg-orange-400 transition-all"
        onClick={() => {
          toast.success("Item is place!");
        }}
      >
        Place Order
      </button>
    </>
  );
};

export default CartPrice;
