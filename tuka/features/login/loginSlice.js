import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  errors: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.errors = "";
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.errors = payload;
    },
  },
});

export const { loginPending, loginSuccess, loginFail } = loginSlice.actions;
export default loginSlice.reducer;
