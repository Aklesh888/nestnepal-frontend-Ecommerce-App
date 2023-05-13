import React, { useContext } from "react";
import Product from "./Product";
import { useQuery } from "react-query";
import { ShopContext } from "../context/ShopContext";


const noOfProducts = 20

async function fetchData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}


const Products = () => {
  const { data, status } = useQuery("data", fetchData);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="bg-black">
        <div className="text-5xl text-center text-white font-bold">Items list</div>
      <div className="flex h-auto w-screen flex-wrap justify-center items-center py-10 ">
        {data.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            price={item.price}
            img={item.image}
            id={item.id}
          />
        ))}
      </div>
      <div className="text-5xl text-center text-white font-bold">End of list</div>
    </div>
  );
};

export default Products;
export {noOfProducts};
