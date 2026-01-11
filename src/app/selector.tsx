import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store/Store";

export const filteredProducts = createSelector(
      [
        (state: RootState) => state.products.products,
        (state: RootState) => state.search.searchText,
        (state: RootState) => state.search.category,
      ],
      (filterProducts, searchText, category) => {
        let productsAfterFilter = filterProducts;
        const regex = new RegExp(`\\b${searchText}\\b`, "i");

        if(searchText){
          return productsAfterFilter.filter((filterProducts) => 
                      regex.test(filterProducts.category));

        }
        if(category){
          return productsAfterFilter.filter((filterProducts) => 
            filterProducts.category === category
          );}
          return [];
        }
);
  
