import { publicRequest } from "../requestMethods";
import {
  getProviderFailure,
  getProviderStart,
  getProviderSuccess,
  deleteProviderFailure,
  deleteProviderStart,
  deleteProviderSuccess,
  updateProviderFailure,
  updateProviderStart,
  updateProviderSuccess,
  addProviderFailure,
  addProviderStart,
  addProviderSuccess,
} from "./providerRedux";



export const getProviders = async (dispatch) => {
  dispatch(getProviderStart());
  try {
    const res = await publicRequest.get("/provider");
    dispatch(getProviderSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(getProviderFailure());
  }
};

export const deleteProvider = async (id, dispatch) => {
  dispatch(deleteProviderStart());
  try {
    await publicRequest.delete(`/provider/${id}`)
    dispatch(deleteProviderSuccess(id));
  } catch (err) {
    dispatch(deleteProviderFailure());
  }
};

export const updateProvider = async (id, provider, dispatch) => {
  dispatch(updateProviderStart());
  try {
    // update
    dispatch(updateProviderSuccess({ id, provider }));
  } catch (err) {
    dispatch(updateProviderFailure());
  }
};
export const addProvider = async (dispatch, provider) => {
  dispatch(addProviderStart());
  try {
    const res = await publicRequest.post("/provider", provider);
    dispatch(addProviderSuccess(res.data));
  } catch (err) {
    dispatch(addProviderFailure());
  }
};
