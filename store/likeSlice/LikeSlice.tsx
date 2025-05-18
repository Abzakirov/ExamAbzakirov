import { ProductType } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";

const getLikedProductsFromStorage = () => {
  if (typeof window !== "undefined") {
    const likedProducts = localStorage.getItem("likedProducts");
    return likedProducts ? JSON.parse(likedProducts) : [];
  }
  return [];
};

export const likeSlice = createSlice({
  name: "likes",
  initialState: {
    products: getLikedProductsFromStorage(),
  },
  reducers: {
    toggleLike: (state, action) => {
      const productIndex = state.products.findIndex(
        (product: ProductType) => product.id === action.payload.id
      );

      if (productIndex >= 0) {
        state.products = state.products.filter(
          (product: ProductType) => product.id !== action.payload.id
        );
      } else {
        state.products.push(action.payload);
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("likedProducts", JSON.stringify(state.products));
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;

export const selectLikedProducts = (state: any) => state.likes.products;

export default likeSlice.reducer;
