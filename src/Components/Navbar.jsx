import React, { useContext, useEffect } from "react";
import { MdFoodBank } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { DataContext } from "../Contex/UserContex";
import { useSelector } from "react-redux";

const Navbar = () => {
  let { input, setInput, cat, setCat, showCart, setShowCart } =
    useContext(DataContext);
  useEffect(() => {
    let newlist = cat.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCat(newlist);
  }, [input]);

  let items = useSelector((state) => state.cart);

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8 ">
      <div className="w-[80px] h-[80px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFoodBank className="w-[50px] h-[50px] text-orange-400" />
      </div>
      <form
        action=""
        className="w-[45%] md:w-[70%] h-[50px] md:h-[60px] bg-white flex items-center md:px-10 px-5 gap-2 md:gap-10 rounded-xl shadow-xl"
        onSubmit={(e) => e.preventDefault}
      >
        <IoIosSearch className="w-[30px] h-[30px] " />
        <input
          type=""
          placeholder="Search Items............."
          className="w-[100%] outline-none border-none text-[16px] md:text-[20px] text-black"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* Add to cart */}
      <div
        className={
          "w-[80px] h-[80px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
        }
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span className="absolute top-0.5 right-2 font-semibold text-[20px] tex-black ">
          {items.length}
        </span>
        <FaCartPlus className="w-[50px] h-[50px] text-orange-400" />
      </div>
    </div>
  );
};

export default Navbar;
