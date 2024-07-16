import React, { useEffect, useState } from "react";
import { GET_PRODUCTS } from "../api/productListApi";
import ProductCard from "./ProductCard";
import { DISPLAY_HEADING, NEW_CARD_IMG } from "../utils/constants";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(GET_PRODUCTS);
      const jsonProducts = await response.json();
      setProducts(jsonProducts.products);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const removeProductFromList = (id) => {
    const productCopy = [...products];
    const filteredProduct = productCopy.filter(
      (product) => product.id !== parseInt(id)
    );
    setProducts(filteredProduct);
  };

  const deleteProduct = async (id) => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const handleId = (e) => {
    deleteProduct(e.currentTarget.value);
  };

  const addProduct = () => {
    setIsLoading(true);
    const productCopy = [...products];
    productCopy.push({
      id: "",
      title: "New Product",
      images: [`${NEW_CARD_IMG}`],
      price: "",
      discountPercentage: "",
    });
    setProducts(productCopy);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="text-2xl font-bold m-4">
          <p>Please wait while we process your request...</p>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="flex flex-wrap justify-between h-12 p-4 m-6 font-bold text-blue-600">
            <p className="text-3xl">{DISPLAY_HEADING}</p>
            <div className="text-xl">
              <button
                className="text-white bg-blue-600 px-2 rounded-md"
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
      )}
    </>
  );
};

export default ProductList;
