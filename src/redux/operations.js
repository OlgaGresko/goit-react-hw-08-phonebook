import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/'
})

export const token = {
  set: (token) => {
    instance.defaults.headers['Authorization'] = token;
  },
  clear: () => {
    instance.defaults.headers['Authorization'] = '';
  }
}

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (formData, thunkAPI) => {
    try {
      const {data} = await instance.post('/users/signup', formData);
      token.set(data.token);
      console.log('data', data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkAPI) => {
    try {
      const {data} = await instance.post('/users/login', formData);
      token.set(data.token);
      console.log('data', data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      const {data} = await instance.post('/users/logout');
      token.clear();
      console.log('data', data)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const userToken = state.auth.token;
      if (!userToken) return thunkAPI.rejectWithValue('Please sign up first!')
      token.set(userToken);
      const {data} = await instance.get('/users/current');
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get(`/contacts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await instance.post(`/contacts`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactIdToDelete, thunkAPI) => {
    try {
      const response = await instance.delete(
        `/contacts/${contactIdToDelete}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({name, number, id}, thunkAPI) => {
    try {
      const response = await instance.patch(`/contacts/${id}`, {name, number});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
