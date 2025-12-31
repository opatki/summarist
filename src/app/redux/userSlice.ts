import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  uid: string | null;
  email: string | null;
  isSubscribed: boolean;
  userLoaded: boolean; // <--- ADD THIS
}

const initialState: UserState = {
  uid: null,
  email: null,
  isSubscribed: false,
  userLoaded: false, // <--- Initially false (we don't know yet)
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.isSubscribed = action.payload.isSubscribed;
      state.userLoaded = true; // <--- We found them, so loading is done
    },
    removeUser: (state) => {
      state.uid = null;
      state.email = null;
      state.isSubscribed = false;
      state.userLoaded = true; // <--- We checked and found NO ONE, but loading is still done
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;