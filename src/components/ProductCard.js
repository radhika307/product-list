import React from "react";

const ProductCard = (product) => {
  return (
    <div>
      <img
        alt="product-image"
        src={product.props.images[0]}
        width={200}
        height={200}
      />
      <p className="text-blue-600">{product.props.title}</p>
    </div>
  );
};

export default ProductCard;
