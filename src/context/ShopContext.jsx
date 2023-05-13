import React, { createContext, useState } from "react";
import { noOfProducts } from "../components/Products";
import { useQuery } from "react-query";

export const ShopContext = createContext(null);


async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < noOfProducts + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const { data } = useQuery("data", fetchData);


  const getTotalAmount = () => {
    let totalAmount = 0;
    for ( const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = data.find((product) => product.id === Number(item))
            totalAmount += cartItems[item] * itemInfo.price
        }
    }

    return             Math.floor(totalAmount)

  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const contextvalue = {cartItems, addToCart, removeFromCart, getTotalAmount};

  console.log(cartItems);
  return <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
