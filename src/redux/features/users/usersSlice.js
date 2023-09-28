import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'


export const fetchUsers = createAsyncThunk('users/fetchUsers',async()=>{
  const res= await axios.get('./users.json');
  return res.data
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    users: [],
    error: null
  } ,
  extraReducers:(builder)=> {
    builder.addCase(fetchUsers.pending, (state)=>{
      state.isLoading= true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error= null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
