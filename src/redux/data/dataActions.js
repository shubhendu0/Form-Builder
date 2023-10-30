import { createAsyncThunk } from '@reduxjs/toolkit'
import dataServices from "./dataServices";


export const addForm = createAsyncThunk(
  "/addForm",
  async (data, thunkAPI) => {
    try {
      return await dataServices.addForm(data);
    } 
    catch (error) {
      const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const getForms = createAsyncThunk(
    "/forms",
    async (_, thunkAPI) => {
      try {
        return await dataServices.getForms();
      } 
      catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)

export const getForm = createAsyncThunk(
  "/form",
  async (id, thunkAPI) => {
    try {
      return await dataServices.getForm(id);
    } 
    catch (error) {
      const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const updateForm = createAsyncThunk(
    "/updateForm",
    async (data, thunkAPI) => {
      try {
        return await dataServices.updateForm(data);
      } 
      catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)
  
export const deleteForm = createAsyncThunk(
    "/deleteForm",
    async (id, thunkAPI) => {
      try {
        return await dataServices.deleteForm(id);
      } 
      catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)

export const addAnswer = createAsyncThunk(
    "/addAnswer",
    async (data, thunkAPI) => {
      try {
        return await dataServices.addAnswer(data);
      } 
      catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)
  
export const getAnswers = createAsyncThunk(
    "/answers",
    async (id, thunkAPI) => {
      try {
        return await dataServices.getAnswers(id);
      } 
      catch (error) {
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
)
  
export const updateAnswer = createAsyncThunk(
    "/updateAnswer",
    async (data, thunkAPI) => {
        try {
          return await dataServices.updateAnswer(data);
        } 
        catch (error) {
          const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
          return thunkAPI.rejectWithValue(message);
        }
    }
)
    
export const deleteAnswer = createAsyncThunk(
    "/deleteAnswer",
    async (id, thunkAPI) => {
        try {
          return await dataServices.deleteAnswer(id);
        } 
        catch (error) {
          const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString();
          return thunkAPI.rejectWithValue(message);
        }
    }
)