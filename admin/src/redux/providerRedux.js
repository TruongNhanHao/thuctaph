import { createSlice } from "@reduxjs/toolkit";

export const providerSlice = createSlice({
  name: "provider",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProviderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProviderSuccess: (state, action) => {
      state.isFetching = false;
      state.providers = action.payload;
    },
    getProviderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProviderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProviderSuccess: (state, action) => {
      state.isFetching = false;
      state.providers.splice(
        state.providers.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProviderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateProviderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProviderSuccess: (state, action) => {
      state.isFetching = false;
      state.providers[
        state.providers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.provider;
    },
    updateProviderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addProviderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProviderSuccess: (state, action) => {
      state.isFetching = false;
      state.providers.push(action.payload);
    },
    addProviderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProviderStart,
  getProviderSuccess,
  getProviderFailure,
  deleteProviderStart,
  deleteProviderSuccess,
  deleteProviderFailure,
  updateProviderStart,
  updateProviderSuccess,
  updateProviderFailure,
  addProviderStart,
  addProviderSuccess,
  addProviderFailure,
} = providerSlice.actions;

export default providerSlice.reducer;
