import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    id: '',
    carts: [],
    quantity: 0,
    isFetching: false,
    error: false,
  },
  reducers: {
    //ADD initialState
    addCartInit: (state, action) => {
      state.isFetching = false;
      state.quantity = action.payload.quantity;
      state.carts = action.payload.carts;
      state.id = action.payload.id;
    },
    //DELETE ALL
    deleteAllCarts: (state) => {
      state.isFetching = false;
      state.quantity = 0;
      state.carts = [];
    },
    //ADD
    addCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCartSuccessUser: (state, action) => {
      state.quantity += action.payload.quantity;
      state.carts.push(action.payload);
    },
    addCartSuccess: (state, action) => {
      state.quantity += action.payload.quantity;
      state.carts.push(action.payload);
      state.isFetching = false;
    },
    addCartSuccessQuantity: (state, action) => {
      state.quantity += action.payload.quantity;
      state.isFetching = false;
      // window.location.reload(true);
      //updateQuantity in products
      state.carts[
        state.carts.findIndex((item) => item.productId === action.payload.productId)
      ].quantity += action.payload.quantity;
    },
    addCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCartSuccess: (state, action) => {
      state.isFetching = false;
      // state.quantity = action.payload.quantity + 1;
      state.carts.carts[state.carts.findIndex((item) => item._id === action.payload._id)].quantity =
        action.payload.quantity;
    },
    updateCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCartStart: (state) => {
      state.isFetching = true;
      state.error = false;
      // window.location.reload(false);
    },
    deleteCartSuccess: (state, action) => {
      state.quantity = state.quantity - action.payload.quantity;
      state.isFetching = false;
      state.carts.splice(
        state.carts.findIndex((item) => item.productId === action.payload.id),
        1
      );
      // window.location.reload(true);
    },
    deleteCartFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addCartStart,
  addCartSuccessUser,
  addCartSuccessQuantity,
  addCartSuccess,
  addCartFailure,
  updateCartStart,
  // addCartQuantityTotal,
  updateCartSuccess,
  addCartInit,
  deleteAllCarts,
  updateCartFailure,
  deleteCartStart,
  deleteCartSuccess,
  deleteCartFailure,
} = cartSlice.actions;
export default cartSlice.reducer;
