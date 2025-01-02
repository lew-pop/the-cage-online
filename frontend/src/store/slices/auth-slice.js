import { createSlice } from '@reduxjs/toolkit';

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const tokenFromStorage = localStorage.getItem('access') ?
    localStorage.getItem('access') : null

const initialState = {
  userInfo: userInfoFromStorage,
  token: tokenFromStorage,
  isAuthenticated: false,
  message: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload.user;
      localStorage.setItem('userInfo', JSON.stringify(payload.user));
      state.token = payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('access', payload.token);
      state.message = "Login successful.";
      
    },
    logout: (state) => {
      localStorage.removeItem('userInfo');
      state.userInfo = null;   
      state.token = null;
      state.isAuthenticated = false;
      state.message = "User has logged out";
      localStorage.removeItem('access');
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
  },
});

// Actions
export const { setUserInfo, logout, setMessage } = authSlice.actions;

// Reducer
export default authSlice.reducer;
