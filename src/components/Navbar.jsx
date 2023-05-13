import React from "react";
import { ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-end space-x-10 h-[70px] px-8 py-5 text-white text-2xl bg-black">
      <Link to='/' className=" pt-[-20px]">Shop</Link>
      <Link to='/cart'>
        <ShoppingCart color="white"></ShoppingCart>
      </Link>
    </div>
  );
};

export default Navbar;
