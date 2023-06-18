import { publicRequest } from "../requestMethods";
import {
  getStockFailure,
  getStockStart,
  getStockSuccess,
  deleteStockFailure,
  deleteStockStart,
  deleteStockSuccess,
  updateStockFailure,
  updateStockStart,
  updateStockSuccess,
  addStockFailure,
  addStockStart,
  addStockSuccess,
} from "./stockRedux";



export const getStocks = async (dispatch) => {
  dispatch(getStockStart());
  try {
    const res = await publicRequest.get("/stock");
    dispatch(getStockSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(getStockFailure());
  }
};

export const deleteStock = async (id, dispatch) => {
  dispatch(deleteStockStart());
  try {
    await publicRequest.delete(`/stock/${id}`)
    dispatch(deleteStockSuccess(id));
  } catch (err) {
    dispatch(deleteStockFailure());
  }
};

export const updateStock = async (id,stock, dispatch) => {
  dispatch(updateStockStart());
  try {
    // update
    dispatch(updateStockSuccess({ id,stock }));
  } catch (err) {
    dispatch(updateStockFailure());
  }
};
export const addStock = async (dispatch,stock) => {
  dispatch(addStockStart());
  try {
    const res = await publicRequest.post("/stock",stock);
    dispatch(addStockSuccess(res.data));
  } catch (err) {
    dispatch(addStockFailure());
  }
};
