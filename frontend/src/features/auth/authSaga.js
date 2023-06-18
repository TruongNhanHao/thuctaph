import { deleteAllCarts } from 'features/cart/cartSlice';
import { call, fork, put, take } from 'redux-saga/effects';
import { publicRequest } from 'requestMethods';
import { authAction } from './authSlice';

async function fetchUser(payload) {
  return await publicRequest.post('/auth/login', payload);
}

function* handleLogin(payload) {
  try {
    const res = yield fetchUser(payload);
    yield put(authAction.loginSuccess(res.data));
    localStorage.setItem('login', 'truongnhanhao');
    window.location.reload();
  } catch (error) {
    yield put(authAction.loginFailed('Loi dang nhap'));
  }
}
function* handleLogout() {
  yield put(authAction.logout());
  yield put(deleteAllCarts());
  // window.location.reload();
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('login'));
    // console.log(isLoggedIn);
    if (!isLoggedIn) {
      const action = yield take(authAction.login.type);
      yield fork(handleLogin, action.payload);
    } else {
      yield take(authAction.logout.type);
      yield call(handleLogout);
    }
  }
}
export default function* authSaga() {
  yield fork(watchLoginFlow);
}
