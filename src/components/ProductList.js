import React, { useEffect, useState } from "react";
import { GET_PRODUCTS } from "../api/productListApi";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await fetch(GET_PRODUCTS);
      const jsonProducts = await response.json();
      setProducts(jsonProducts.products);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex flex-wrap justify-between h-12 p-4 m-4 font-bold text-blue-600 text-2xl">
        <h3>The wait is over—our sale starts today!</h3>
        <button>Add Item</button>
      </div>
      <div className="flex flex-wrap">
        {products?.length > 0 &&
          products.map((product) => {
            return <ProductCard key={product.id} props={product} />;
          })}
      </div>
    </>
  );
};

export default ProductList;
