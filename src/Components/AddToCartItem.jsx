import React from "react";
// import image from "../assets/image1.avif";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/CartSlice";
import { toast } from "react-toastify";
const AddToCartItem = ({ id, name, price, image, qty }) => {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] p-2 flex justify-between shadow-lg rounded-lg">
      <div className="w-[60%] h-full flex gap-[20px]">
        {/* left side */}
        <div className="w-[60%] h-full overflow-hidden rounded-xl">
          <img src={image} className="object-cover" />
        </div>
        <div className="w-[40px] h-full flex flex-col gap-5">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-[100px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-xl text-xl border-2 border-orange-400 ">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                qty > 1 ? dispatch(DecrementQty({ id: id })) : qty;
              }}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200 cursor-pointer "
              onClick={() => {
                dispatch(IncrementQty({ id: id }));
                toast.success("Item is Added");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-start items-end gap-6">
        <spn className="text-xl text-orange-400 font-semibold">₹ {price}</spn>
        <ImBin
          className="w-[30px] h-[30px] text-red-400 cursor-pointer"
          onClick={() => {
            dispatch(RemoveItem(id));
            toast("Item is remove!");
          }}
        />
      </div>
    </div>
  );
};

export default AddToCartItem;
