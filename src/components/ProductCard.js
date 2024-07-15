import React from "react";

const ProductCard = (product) => {
  return (
    <div>
      <p>{product.props.title}</p>
      <img
        alt="product-image"
        src={product.props.images[0]}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ProductCard;
