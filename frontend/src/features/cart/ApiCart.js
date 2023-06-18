import {
  addCartFailure,
  addCartInit,
  addCartStart,
  addCartSuccess,
  addCartSuccessQuantity,
  addCartSuccessUser,
  deleteCartFailure,
  deleteCartStart,
  deleteCartSuccess,
  updateCartFailure,
  updateCartStart,
  updateCartSuccess,
} from './cartSlice';
import { publicRequest } from 'requestMethods';

export const addCart = async (product, dispatch) => {
  dispatch(addCartStart());
  try {
    const getCart = await publicRequest.get(`/carts/find/${product.userId}`);
    // console.log(getCart,getCart.data.products[0].productId, getCart.data._id, product.products[0]);
    if (getCart.data !== null) {
      let i,
        d = -1;
      for (i = 0; i <= getCart.data.products.length - 1; i++) {
        if (product.products[0].productId === getCart.data.products[i].productId) {
          d = i;
        }
      }
      if (d !== -1) {
        let c = product.products[0].quantity + getCart.data.products[d].quantity;
        await publicRequest.put(`/carts/updateQuantity`, {
          userId: getCart.data.userId,
          productId: getCart.data.products[d].productId,
          quantity: c,
        });
        dispatch(addCartSuccessQuantity(product.products[0]));
        // console.log(d, c);
      } else if (d === -1) {
        await publicRequest.put(`/carts/insert/${getCart.data._id}`, product.products[0]);
        dispatch(addCartSuccessUser(product.products[0]));
      }
    } else {
      const res = await publicRequest.post(`/carts`, product);
      dispatch(addCartSuccess(res.data.products[res.data.products.length - 1]));
    }
  } catch (err) {
    console.log(err);
    dispatch(addCartFailure());
  }
};
export const updateProduct = async (urlId, product, dispatch) => {
  dispatch(updateCartStart());
  try {
    const res = await publicRequest.post(`/carts/${urlId}`, product);
    dispatch(updateCartSuccess(res.data));
  } catch (err) {
    dispatch(updateCartFailure());
  }
};
export const deleteCart = async (hh, quantity, dispatch) => {
  dispatch(deleteCartStart());
  try {
    await publicRequest.put(`/carts/find/deleteProduct`, hh);
    dispatch(deleteCartSuccess({ id: hh.productId, quantity: quantity }));
  } catch (err) {
    dispatch(deleteCartFailure());
  }
};

export const AddCartInit = async (Id, dispatch) => {
  dispatch(addCartStart());
  try {
    const getCart = await publicRequest.get(`/carts/find/${Id}`);
    const getQuantity = await publicRequest.get(`/carts/total`);
    console.log(getCart.data.products);
    dispatch(
      addCartInit({
        carts: getCart.data.products,
        quantity: getQuantity.data[0].TotalQuantity,
        id: getCart.data._id,
      })
    );
  } catch (err) {
    dispatch(addCartFailure());
  }
};

export const updateQuantity = async (data, dispatch) => {
  dispatch(addCartStart());
  try {
    // const quan = await publicRequest.get('/carts/find/products/quantity', {
    //   productId: data.productId,
    // });
    const getCart = await publicRequest.get(`/carts/find/${data.userId}`);
    if (getCart) {
      // console.log(getCart.data.products[0]);
      let i,
        d = -1;
      for (i = 0; i <= getCart.data.products.length - 1; i++) {
        if (getCart.data.products[i].productId === data.productId) {
          d = i;
        }
      }
      // console.log(d);
      if (d !== -1) {
        const q = getCart.data.products[d].quantity + data.quantity;
        await publicRequest.put(`/carts/updateQuantity`, {
          userId: data.userId,
          productId: data.productId,
          quantity: q,
        });
        dispatch(addCartSuccessQuantity({ quantity: data.quantity, productId: data.productId }));
      }
    }
  } catch (err) {
    dispatch(addCartFailure());
  }
};
