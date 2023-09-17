import { createSlice } from '@reduxjs/toolkit';
import {
  signupUser,
  loginUser,
  logoutUser,
  refreshUser,
} from './operations';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
  authenticated: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      // Sign Up
      .addCase(signupUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Log In
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //   Log Out
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //   REFRESH
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.authenticated = true;
        state.userData = action.payload;
   })
    .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      state.isLoading = false;
        state.error = action.payload;
      })






    //   .addCase(fetchContacts.pending, state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.items = action.payload;
    //   })
    //   .addCase(fetchContacts.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   })
    //   .addCase(addContact.pending, state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(addContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   })
    //   .addCase(deleteContact.pending, state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     const index = state.items.findIndex(
    //       contact => contact.id === action.payload
    //     );
    //     state.items.splice(index, 1);
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   })
    //   .addCase(editContact.pending, state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(editContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     const index = state.items.findIndex(
    //       contact => contact.id === action.payload.id
    //     );
    //     state.items.splice(index, 1, action.payload);
    //   })
    //   .addCase(editContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   }),
});

export const authReducer = authSlice.reducer;
