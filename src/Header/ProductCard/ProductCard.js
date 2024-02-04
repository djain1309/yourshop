import React from "react";
import classes from "./ProductCard.module.css"
/*

brand: "Apple"
category: "smartphones"
description: "An apple mobile which is nothing like apple"
discountPercentage: 12.96
id: 1
length: 5
price: 549
rating: 4.69
stock: 94
thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
title: "iPhone 9"

*/
const ProductCard = ({ product }) => {
  return (
    <div>
        <h4>{product.title}</h4>  
        <img
            src={product.thumbnail}
            alt={product.title}
            className={classes.img}
        />
        {/* <p>{product.description}</p> */}
    </div>
  );
};

export default ProductCard;