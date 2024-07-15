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
      <div>
        {products?.length > 0 &&
          products.map((product) => {
            return <ProductCard props={product} />;
          })}
      </div>
    </>
  );
};

export default ProductList;
