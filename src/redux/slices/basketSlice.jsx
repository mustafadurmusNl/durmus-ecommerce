/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  const basket = localStorage.getItem("basket");
  if (basket) {
    return JSON.parse(basket);
  }
  return [];
};
const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0,

};
const logProductFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        const extrctedProdcuts = state.products.filter(
          (product) => product.id !== action.payload.id
        );
        const updatedProduct = {
          ...findProduct,
          quantity: findProduct.quantity + 1,
        };
        state.products = [...extrctedProdcuts, updatedProduct];
        logProductFromBasketToStorage(state.products);
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        logProductFromBasketToStorage(state.products);
      }
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calculateBasketTotal: (state) => {
      state.totalAmount = parseFloat(
        state.products
          .reduce((acc, product) => acc + product.price*product.count, 0)
          .toFixed(2)
      );
    },
    removeFromBasket: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      logProductFromBasketToStorage(state.products);
    },

    
}
}
);


export const { addToBasket, setDrawer, calculateBasketTotal,removeFromBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
