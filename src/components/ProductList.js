import React, { useEffect, useState } from "react";
import { GET_PRODUCTS } from "../api/productListApi";
import ProductCard from "./ProductCard";
import Shimmer from "./ShimmerUI";
import { DISPLAY_HEADING, NEW_CARD_IMG } from "../utils/constants";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  //Get product API
  const getProducts = async () => {
    try {
      const response = await fetch(GET_PRODUCTS);
      const jsonProducts = await response.json();
      setProducts(jsonProducts.products);
    } catch (error) {
      console.log(error);
    }
  };

  const removeProductFromList = (id) => {
    const productCopy = [...products];
    const filteredProduct = productCopy.filter(
      (product) => product.id !== parseInt(id)
    );
    setProducts(filteredProduct);
  };

  //Delete product API
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${GET_PRODUCTS}/${id}`, {
        method: "DELETE",
      });
      const jsonResponse = await response.json();
      if (jsonResponse.isDeleted === true) {
        removeProductFromList(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleId = (e) => {
    deleteProduct(e.currentTarget.value);
  };

  const addProduct = () => {
    const productCopy = [...products];
    productCopy.unshift({
      id: "",
      title: "New Product",
      images: [`${NEW_CARD_IMG}`],
      price: "",
      discountPercentage: "",
    });
    setProducts(productCopy);
  };

  //Early return
  if (!products) return null;

  return products.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex flex-wrap justify-between h-12 p-4 m-6 font-bold text-blue-600">
        <p className="text-3xl">{DISPLAY_HEADING}</p>
        <div className="text-xl">
          <button
            className="text-white px-2 rounded-md transition ease-in-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            onClick={addProduct}
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {products?.length > 0 &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                props={product}
                handleId={handleId}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
