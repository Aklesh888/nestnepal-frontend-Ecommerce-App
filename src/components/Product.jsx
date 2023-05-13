import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = (props) => {
  const [showDescription, setShowDescription] = useState(false);

  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[props.id];

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="flex flex-col h-auto md:w-1/3 w-[80%] rounded-lg bg-blue-500 items-center justify-between p-8 space-y-3 text-white my-8 mx-4">
      <div className="md:text-3xl text-xl font-semibold text-center">{props.title}</div>
      <div className="text-xl font-semibold text-gray-300">
        {props.category}
      </div>
      <img className="h-64 w-auto rounded-md " src={props.img} alt="" />
      <div className="text-2xl md:xl font-semibold">${props.price.toFixed(2)}</div>
      <div className="text-lg md:text-base leading-relaxed">
        {showDescription
          ? props.description
          : props.description.slice(0, 100) + "..."}
        <button
          onClick={toggleDescription}
          className="text-blue-200 hover:text-white transition-colors duration-300 focus:outline-none"
        >
          {showDescription ? " read Less" : " read more"}
        </button>
      </div>
      <button
        onClick={() => addToCart(props.id)}
        className=" bg-white text-black text-xl border-black border-2 font-medium rounded-lg px-3"
      >
        Add to cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
      </button>
      <div className={` ${cartItems[props.id] > 0 ? 'visible': 'hidden'}`}>
        <button onClick={() => addToCart(props.id)} className=" px-4">+</button>
        <input
          className=" text-center text-black w-[50px]"
          value={cartItems[props.id]}
          type="number"
        />
        <button onClick={() => removeFromCart(props.id)} className=" px-4">-</button>
      </div>
    </div>
  );
};

export default Product;
