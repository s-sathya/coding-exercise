import React from "react";

import cn from "./index.module.css";
import { formatPrice } from "./helper";

function ProductCard({ productImage, productName, productPrice }) {
  return (
    <div className={cn.productContainer}>
      <img src={productImage} alt={productName} className={cn.productImage} />
      <div className={cn.productText}>
        <div className={cn.productName}>{productName}</div>
        <div className={cn.productPrice}>{formatPrice(productPrice)}</div>
      </div>
    </div>
  );
}

export default ProductCard;
