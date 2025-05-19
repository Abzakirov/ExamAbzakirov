import { showSuccessToast } from "@/generics/toast/Toast";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductType {
  id: string;
  name: string;
  price: number;
  img: string;
  currentPrice: number;
  discount: number;
  rate: number;
  quantity?: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface ProductInfoType {
  id: string;
  name: string;
  img: string;
  price: number;
  currentPrice: number;
  discount: number;
  rate: number;
  color: string[];
  size: string[];
}

export type Product = ProductType;

interface ProductState {
  items: ProductType[];
}

const loadFromLocalStorage = <T,>(key: string): T | undefined => {
  try {
    if (typeof window !== 'undefined') {
      const serialized = localStorage.getItem(key);
      return serialized ? JSON.parse(serialized) : undefined;
    }
    return undefined;
  } catch (e) {
    console.error("Ошибка при загрузке из localStorage", e);
    return undefined;
  }
};

const saveToLocalStorage = (key: string, value: any) => {
  try {
    if (typeof window !== 'undefined') {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
    }
  } catch (e) {
    console.error("Ошибка при сохранении в localStorage", e);
  }
};

const initialState: ProductState = {
  items: loadFromLocalStorage<ProductType[]>("products") || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ProductType>) {
      const existingProductIndex = state.items.findIndex(
        item => item.id === action.payload.id && 
               item.selectedSize === action.payload.selectedSize && 
               item.selectedColor === action.payload.selectedColor
      );

      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity = 
          (state.items[existingProductIndex].quantity || 1) + 
          (action.payload.quantity || 1);
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1
        });
      }
      
      saveToLocalStorage("products", state.items);
      showSuccessToast("Mahsulot muvaffaqiyatli qo'shildi!");
    },
    
    removeProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToLocalStorage("products", state.items);
    },
    
    updateQuantity(state, action: PayloadAction<{id: string, quantity: number}>) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
        saveToLocalStorage("products", state.items);
      }
    },
    
    clearProducts(state) {
      state.items = [];
      saveToLocalStorage("products", state.items);
    },
  },
});

export const { addProduct, removeProduct, updateQuantity, clearProducts } =
  productSlice.actions;
export default productSlice.reducer;