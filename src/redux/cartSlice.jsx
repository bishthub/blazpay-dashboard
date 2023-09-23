import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // addToCart: (state, action) => {
    //   state.push(action.payload);
    // },
    // removeFromCart: (state, action) => {
    //   const index = state.findIndex((item) => item.id === action.payload.id);
    //   if (index !== -1) {
    //     state.splice(index, 1);
    //   }
    // },
    // Add more actions as needed (e.g., update quantity)
    addToCart: (state, action) => {
      const { prodId, title } = action.payload;
      const existingItem = state.find((item) => item.prodId === prodId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ prodId, title, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { prodId } = action.payload;
      const itemIndex = state.findIndex((item) => item.prodId === prodId);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
