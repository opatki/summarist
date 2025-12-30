import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  email: string | null;
  uid: string | null;
  displayName: string | null;
  isSubscribed: boolean | null;
}

const initialState: UserState = {
  email: null,
  uid: null,
  displayName: null,
  isSubscribed: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.isSubscribed = false;
    },
    removeUser: (state) => {
      state.email = null;
      state.uid = null;
      state.displayName = null;
      state.isSubscribed = null;
    },
    upgradeUser: (state) => {
      state.isSubscribed = true;
    }
  }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer