import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
  name: "stock",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getStockStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getStockSuccess: (state, action) => {
      state.isFetching = false;
      state.stocks = action.payload;
    },
    getStockFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteStockStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteStockSuccess: (state, action) => {
      state.isFetching = false;
      state.stocks.splice(
        state.stocks.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteStockFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateStockStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateStockSuccess: (state, action) => {
      state.isFetching = false;
      state.stocks[
        state.stocks.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.stock;
    },
    updateStockFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addStockStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addStockSuccess: (state, action) => {
      state.isFetching = false;
      state.stocks.push(action.payload);
    },
    addStockFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getStockStart,
  getStockSuccess,
  getStockFailure,
  deleteStockStart,
  deleteStockSuccess,
  deleteStockFailure,
  updateStockStart,
  updateStockSuccess,
  updateStockFailure,
  addStockStart,
  addStockSuccess,
  addStockFailure,
} = stockSlice.actions;

export default stockSlice.reducer;
