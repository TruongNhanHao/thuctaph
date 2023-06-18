import { publicRequest } from "../requestMethods";
import {
  getWarehouseFailure,
  getWarehouseStart,
  getWarehouseSuccess,
  deleteWarehouseFailure,
  deleteWarehouseStart,
  deleteWarehouseSuccess,
  updateWarehouseFailure,
  updateWarehouseStart,
  updateWarehouseSuccess,
  addWarehouseFailure,
  addWarehouseStart,
  addWarehouseSuccess,
} from "./warehouseRedux";

export const getWarehouses = async (dispatch) => {
  dispatch(getWarehouseStart());
  try {
    const res = await publicRequest.get("/warehouse");
    dispatch(getWarehouseSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(getWarehouseFailure());
  }
};

export const deleteWarehouse = async (id, dispatch) => {
  dispatch(deleteWarehouseStart());
  try {
    await publicRequest.delete(`/warehouse/${id}`)
    dispatch(deleteWarehouseSuccess(id));
  } catch (err) {
    dispatch(deleteWarehouseFailure());
  }
};

export const updateWarehouse = async (id,warehouse, dispatch) => {
  dispatch(updateWarehouseStart());
  try {
    // update
    dispatch(updateWarehouseSuccess({ id,warehouse }));
  } catch (err) {
    dispatch(updateWarehouseFailure());
  }
};
export const addWarehouse = async (dispatch,warehouse) => {
  dispatch(addWarehouseStart());
  try {
    const res = await publicRequest.post("/warehouse",warehouse);
    dispatch(addWarehouseSuccess(res.data));
  } catch (err) {
    dispatch(addWarehouseFailure());
  }
};
