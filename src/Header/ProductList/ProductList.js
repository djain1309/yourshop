import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductList.module.css";

const ProductList = () => {
  const [categories, setCategories] = useState();

  const [visibleIndexes, setVisibleIndexes] = useState({});

  const handleNext = (category) => {
    setVisibleIndexes(prevIndexes => ({
      ...prevIndexes,
      [category]: Math.min(prevIndexes[category] + 3, categories[category].length - 3)
    }));
  };

  const handlePrev = (category) => {
    setVisibleIndexes(prevIndexes => ({
      ...prevIndexes,
      [category]: Math.max(prevIndexes[category] - 3, 0)
    }));
  };

  const fetchData = useCallback(async () => {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();
    const res = result.products;
    const cat = {};
    res.forEach((product) => {
      if (!cat[product.category]) {
        cat[product.category] = [];
      }
      cat[product.category].push(product);
    });
    setCategories(cat);
  }, []);

  useEffect(() => {
    if (categories) {
      setVisibleIndexes(
        Object.keys(categories).reduce((acc, category) => {
          acc[category] = 0;
          return acc;
        }, {})
      );
    }
  }, [categories]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={classes.list}>
      <h3>ProductList</h3>
      {categories &&
      Object.keys(categories).map((category) => {
        const startIndex = visibleIndexes[category] || 0;
        const endIndex = startIndex + 3;
        const visibleProducts = categories[category].slice(startIndex, endIndex);

        return (
          <div key={category} className={classes.categoryContainer}>
            <h2 className={classes.categoryTitle}>{category}</h2>
            <div className={classes.carousel}>
              {startIndex > 0 && (
                <button onClick={() => handlePrev(category)} className={`${classes.arrow} ${classes.leftArrow}`}>
                  {"<"}
                </button>
              )}
              <div className={classes.carouselContent}>
                {visibleProducts.map((product) => (
                  <div key={product.id} className={classes.productCardContainer}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              {categories[category].length > endIndex && (
                <button onClick={() => handleNext(category)} className={`${classes.arrow} ${classes.rightArrow}`}>
                  {">"}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
