import React, { createContext, useState } from "react";
import { food_items } from "../assets/food";

export const DataContext = createContext();

const UserContex = ({ children }) => {
  let [cat, setCat] = useState(food_items);
  let [input, setInput] = useState("");
  let [showCart, setShowCart] = useState(false);
  let data = {
    input,
    setInput,
    cat,
    setCat,
    showCart,
    setShowCart,
  };
  return (
    <div>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </div>
  );
};
export default UserContex;
