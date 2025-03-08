import { FaBorderAll } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { BiSolidBowlHot } from "react-icons/bi";
import { GiFullPizza } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";
import { TbSoupFilled } from "react-icons/tb";
import { BiSolidDish } from "react-icons/bi";

const Category = [
  {
    id: 1,
    name: "All",
    image: <FaBorderAll className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 2,
    name: "Main_Dish",
    image: <BiSolidDish className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 3,
    name: "Breakfast",
    image: <MdFreeBreakfast className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 4,
    name: "Pasta",
    image: <BiSolidBowlHot className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 5,
    name: "Pizza",
    image: <GiFullPizza className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 6,
    name: "Burger",
    image: <SiBurgerking className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 7,
    name: "Soups",
    image: <TbSoupFilled className="w-[60px] h-[60px] text-orange-400" />,
  },
];

export default Category;
