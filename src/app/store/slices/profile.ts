import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.profile.user) {
        return state
      }
      state.user = action.payload.profile.user
    },
  },
})

export const { setUser } = ProfileSlice.actions

export const selectUser = state => state.profile.user

export default ProfileSlice.reducer
