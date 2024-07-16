import React from "react";

const ProductCard = (product) => {
  const { id, title, price, discountPercentage } = product.props;

  return (
    <div className="p-4 m-2 w-38 border">
      <button
        type="button"
        value={id}
        className="float-right font-bold bg-red-300 p-2 rounded-sm"
        onClick={(e) => product.handleId(e)}
      >
        X
      </button>
      <img
        className="w-60 h-60"
        alt="product-image"
        src={product.props.images[0]}
      />
      <div className="text-center">
        <p className="ttext-bold">{title}</p>
        <p>Price: {price}Rs</p>
        <p>Discount: {discountPercentage}%</p>
      </div>
    </div>
  );
};

export default ProductCard;
