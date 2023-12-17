import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser } from './authAPI';


const initialState = {
    loggedInUserToken: null, 
    status: 'idle',
    error: null,
    userChecked: false,
    mailSent: false,
    passwordReset:false
  };

export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);
export const loginUserAsync  = createAsyncThunk(
  'user/loginUser',
  async (loginInfo) => {
    const response = await loginUser(loginInfo);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })



      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUserToken = action.payload;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      })
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export const selectLoggedInUser = (state) => state.auth.loggedInUserToken;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
