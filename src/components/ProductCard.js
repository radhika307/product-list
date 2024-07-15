import React from "react";

const ProductCard = (product) => {
  return (
    <div className="p-4 m-2 w-38 border">
      <button className="float-right font-bold bg-red-300 p-2 rounded-sm">
        X
      </button>
      <img
        className="w-60 h-60"
        alt="product-image"
        src={product.props.images[0]}
      />
      <div className="text-center">
        <p className="ttext-bold">{product.props.title}</p>
        <p>Price: {product.props.price}Rs</p>
        <p>Discount: {product.props.discountPercentage}%</p>
      </div>
    </div>
  );
};

export default ProductCard;
