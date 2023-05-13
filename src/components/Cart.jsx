import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Product from "./Product";
import { useQuery } from "react-query";

async function fetchData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Cart = () => {
  const { data } = useQuery("data", fetchData);

  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  return (
    <div className=" bg-black text-white h-900px bg-screen">
      <div className=" text-5xl text-center py-10">Your cart items</div>
      <div className="flex h-auto w-screen flex-wrap justify-center items-center py-10">
        {data.map((product)=> {
          if (cartItems[product.id] !== 0) {
            return (
              <Product
                key={product.id}
                title={product.title}
                category={product.category}
                description={product.description}
                price={product.price}
                img={product.image}
                id={product.id}
              />
            );
          }
          else{
            return <div></div>
          }
        })}
      </div>
      <div className="text-center text-3xl bg-black text-white rounded-md">
        Total amount:{totalAmount}
      </div>
    </div>
  );
};

export default Cart;
