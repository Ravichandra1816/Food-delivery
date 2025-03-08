import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Category from "../assets/Category";
import Cart from "../Components/Cart";
import { food_items } from "../assets/food";
import { DataContext } from "../Contex/UserContex";
import AddToCart from "../Components/AddToCart";

const Home = () => {
  let { cat, setCat, input } = useContext(DataContext);
  function filter(Category) {
    if (Category === "All") {
      setCat(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === Category
      );
      setCat(newList);
    }
  }

  return (
    <div className="w-full min-h-[100vh]  bg-slate-200">
      <Navbar />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-20">
          {Category.map((item) => {
            return (
              <div
                className="w-[120px] h-[120px] bg-white flex flex-col justify-center items-center rounded-xl shadow-xl text-[20px] text-gray-700 font-semibold hover:bg-orange-200 transition-all duration-200 cursor-pointer"
                onClick={() => filter(item.name)}
              >
                {item.image}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      <div className="w-full flex flex-wrap justify-center items-center px-5 gap-5 p-8 ">
        {cat.length > 1 ? (
          cat.map((item) => (
            <Cart
              id={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
            />
          ))
        ) : (
          <div className="items-center text-2xl text-orange-400 font-semibold pt-2 mt-5">
            Dish is not found!
          </div>
        )}
      </div>

      {/* Open Add to cart */}
      <AddToCart />
    </div>
  );
};

export default Home;
