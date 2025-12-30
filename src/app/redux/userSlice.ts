import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  email: string | null;
  uid: string | null;
  displayName: string | null;
}

const initialState: UserState = {
  email: null,
  uid: null,
  displayName: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      // Update the state with the user data provided
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      // Reset state to nulls
      state.email = null;
      state.uid = null;
      state.displayName = null;
    }
  }
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer