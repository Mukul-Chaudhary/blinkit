import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const newItem = {
        item: action.payload.item,
        img: action.payload.img,
        type: action.payload.type,
        quantity: action.payload.quantity,
        sellingPrice: action.payload.sellingPrice,
        deliveryTime: action.payload.deliveryTime,
        selectedItem: 1,
      };

      const existingItem = state.carts.find(
        (cart) => cart.item === newItem.item && cart.type === newItem.type
      );

      if (existingItem) {
        existingItem.selectedItem++;
      } else {
        state.carts.push(newItem);
      }
    },
    removeCart: (state, action) => {
      const newItem = {
        item: action.payload.item,
        img: action.payload.img,
        type: action.payload.type,
        quantity: action.payload.quantity,
        sellingPrice: action.payload.sellingPrice,
        deliveryTime: action.payload.deliveryTime,
        selectedItem: 0,
      };

      const existingItemIndex = state.carts.findIndex(
        (cart) => cart.item === newItem.item && cart.type === newItem.type
      );

      if (existingItemIndex !== -1) {
        state.carts[existingItemIndex].selectedItem--;
        if (state.carts[existingItemIndex].selectedItem === 0) {
          state.carts.splice(existingItemIndex, 1); // Remove the item if selectedItem is 0.
        }
      }
    },
    returnItemCount: (state, action) => {
      const newItem = {
        item: action.payload.item,
        type: action.payload.type,
      };

      const existingItem = state.carts.find(
        (cart) => cart.item === newItem.item && cart.type === newItem.type
      );

      if (existingItem) {
        return existingItem.selectedItem;
      }

      return 0;
    },
  },
});
export const { addCart, removeCart, returnItemCount } = cartSlice.actions;

export default cartSlice.reducer;
