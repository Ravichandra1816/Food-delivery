import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { DataContext } from "../Contex/UserContex";
import AddToCartItem from "./AddToCartItem";
import { useSelector } from "react-redux";
import CartPrice from "./CartPrice";

const AddToCart = () => {
  let { showCart, setShowCart } = useContext(DataContext);
  let items = useSelector((state) => state.cart);

  return (
    <div
      className={`bg-white w-full md:w-[30vw] h-[100%] fixed top-0 right-0 shadow-xl p-6  transition-all duration-600 overflow-auto flex flex-col items-center ${
        showCart ? "translate-x-0" : "translate-x-full "
      }`}
    >
      <header className="w-[100%] flex justify-between items-center">
        <span className="text-orange-400 text-[18px] font-semibold">
          Order Items
        </span>
        <RxCross2
          className="text-orange-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer hover:text-red-600"
          onClick={() => setShowCart(false)}
        />
      </header>
      {items.length > 0 ? (
        <>
          <div className="flex flex-col w-full mt-10 gap-8">
            {items.map((item) => (
              <AddToCartItem
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                qty={item.qty}
              />
            ))}
          </div>
          <CartPrice />
        </>
      ) : (
        <div className="items-center text-2xl text-orange-400 font-semibold pt-2 mt-5">
          Empty Cart
        </div>
      )}
    </div>
  );
};

export default AddToCart;
