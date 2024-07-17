import React from "react";

const ProductCard = (product) => {
  const { id, title, price, discountPercentage } = product.props;

  return (
    <div className="p-4 m-4 w-38 rounded-lg transition ease-in-out delay-150 bg-blue-100 hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300">
      <button
        type="button"
        value={id}
        className="float-right font-bold bg-red-300 p-2 rounded-sm"
        onClick={(e) => product.handleId(e)}
      >
        X
      </button>
      <img
        className="w-44 h-44"
        alt="product-image"
        src={product.props.images[0]}
      />
      <div className="text-center">
        <p className="text-red-500 font-semibold">{title}</p>
        <div className="flex space-x-28 my-4 font-bold">
          <p>{price}$</p>
          <p>{discountPercentage}% OFF</p>
        </div>
        <div className="flex space-x-24">
          <p className="text-red-500 underline">Buy Now</p>
          <p className="text-red-500 underline">Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
