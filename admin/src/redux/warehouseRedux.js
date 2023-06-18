import { createSlice } from "@reduxjs/toolkit";

export const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getWarehouseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getWarehouseSuccess: (state, action) => {
      state.isFetching = false;
      state.warehouses = action.payload;
    },
    getWarehouseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteWarehouseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteWarehouseSuccess: (state, action) => {
      state.isFetching = false;
      state.warehouses.splice(
        state.warehouses.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteWarehouseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateWarehouseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateWarehouseSuccess: (state, action) => {
      state.isFetching = false;
      state.warehouses[
        state.warehouses.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateWarehouseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addWarehouseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addWarehouseSuccess: (state, action) => {
      state.isFetching = false;
      state.warehouses.push(action.payload);
    },
    addWarehouseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getWarehouseStart,
  getWarehouseSuccess,
  getWarehouseFailure,
  deleteWarehouseStart,
  deleteWarehouseSuccess,
  deleteWarehouseFailure,
  updateWarehouseStart,
  updateWarehouseSuccess,
  updateWarehouseFailure,
  addWarehouseStart,
  addWarehouseSuccess,
  addWarehouseFailure,
} = warehouseSlice.actions;

export default warehouseSlice.reducer;
