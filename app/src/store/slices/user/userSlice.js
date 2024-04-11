import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({ // CREATE SLICE
  name: 'user', // NAME SLICE
  initialState: { // STATE
    user: [],
    isLoading: true
  },
  reducers: { // STORE REDUCERS
    setAuthenticatedUser: (state, action) => { // REDUCER SET USER / LOGIN
      state.user = action.payload,
      state.isLoading = false
    },
    removeAuthenticatedUser: (state) => { // REDUCER REMOVER USER / LOGOUT
      state.user = [],
      state.isLoading = false
    }
  }
})


export const { setAuthenticatedUser, removeAuthenticatedUser } = userSlice.actions // EXPORT REDUCERS