import { publicRequest } from "../requestMethods";
import {
  getOrderFailure,
  getOrderStart,
  getOrderSuccess,
  deleteOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  updateOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  addOrderFailure,
  addOrderStart,
  addOrderSuccess,
} from "./orderRedux";



export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await publicRequest.get("/orders");
    dispatch(getOrderSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    await publicRequest.delete(`/order/${id}`)
    dispatch(deleteOrderSuccess(id));
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};

export const updateOrder = async (id,order, dispatch) => {
  dispatch(updateOrderStart());
  try {
    // update
    dispatch(updateOrderSuccess({ id,order }));
  } catch (err) {
    dispatch(updateOrderFailure());
  }
};
export const addOrder = async (dispatch,order) => {
  dispatch(addOrderStart());
  try {
    const res = await publicRequest.post("/order",order);
    dispatch(addOrderSuccess(res.data));
  } catch (err) {
    dispatch(addOrderFailure());
  }
};
