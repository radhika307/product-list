import React, { useEffect, useState } from "react";
import { GET_PRODUCTS } from "../api/productListApi";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

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
    productCopy.push({
      id: "id",
      title: "New Product",
      images: [
        "https://cdn2.hubspot.net/hub/215841/file-3945428210-jpg/blog-files/new-product-blog-602x347pix.jpg",
      ],
      price: "price",
      discountPercentage: "discount%",
    });
    setProducts(productCopy);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between h-12 p-4 m-6 font-bold text-blue-600">
        <p className="text-3xl">The wait is over—our sale starts today!</p>
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
  );
};

export default ProductList;
