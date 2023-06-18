import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoginPayload {
  username: string;
  password: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  error: boolean;
  currentUser?: any;
}
const initialState: AuthState = {
  error: false,
  logging: false,
  isLoggedIn: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // initialStates,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
      state.error = false;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.logging = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.error = false;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      state.error = true;
    },

    logout(state) {
      state.logging = false;
      console.log(state.logging);
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

export const authAction = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectLogging = (state: any) => state.auth.logging;

const authReducer = authSlice.reducer;
export default authReducer;
function defaultOptionsState() {
  throw new Error('Function not implemented.');
}
