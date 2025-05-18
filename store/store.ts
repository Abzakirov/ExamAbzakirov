import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/ProductSlice";
import likeReducer from "./likeSlice/LikeSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    likes: likeReducer
  },
});

export default store;