import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSage';
import counterReducer from '../features/counter/counterSlice';
import authReducer from 'features/auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from 'features/cart/cartSlice';
import productSlice from 'features/products/productSlice';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  cart: cartSlice,
  product: productSlice,
});
// const initialState = appReducer({}, {});
// const rootReducer = (state: any, action: any) => {
//   console.log(action);
//   if (action.type === 'auth/logout') {
// for all keys defined in your persistConfig(s)
// state = undefined;

// storage.removeItem('persist:otherKey')
// console.log(state);
// const { routing } = state;
// state = { routing };
// return appReducer(undefined, { type: undefined });
//   }
//   return appReducer(state, action);
// };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   counter: counterReducer,
  //   auth: authReducer,
  // },
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),

  devTools: true,
});
sagaMiddleware.run(rootSaga);
export let persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
