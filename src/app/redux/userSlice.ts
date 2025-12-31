import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  uid: string | null;
  email: string | null;
  isSubscribed: boolean;
  userLoaded: boolean; 
}

const initialState: UserState = {
  uid: null,
  email: null,
  isSubscribed: false,
  userLoaded: false, 
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.isSubscribed = action.payload.isSubscribed;
      state.userLoaded = true; 
    },
    removeUser: (state) => {
      state.uid = null;
      state.email = null;
      state.isSubscribed = false;
      state.userLoaded = true; 
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;