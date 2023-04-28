import React from "react";

import cn from "./index.module.css";
import ProductCard from "../product-card";

function MainContent({ data = [] }) {
  return (
    <div className={cn.mainContent}>
      {data.length ? data.map((product, index) => (
        <ProductCard
          key={index}
          productImage={product.productImage}
          productName={product.productName}
          productPrice={product.price}
        />
      )) : 'No Product Found in Your Store'}
    </div>
  );
}

export default MainContent;
