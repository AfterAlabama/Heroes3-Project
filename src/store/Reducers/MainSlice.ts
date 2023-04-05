import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
  isAuth: boolean,
  isLeftDrawerOpen: boolean,
  isAccountBeingCreated: boolean,
  isAccountCreated: boolean,
}

const initialState: SliceState = {
  isAuth: false,
  isLeftDrawerOpen: false,
  isAccountBeingCreated: false,
  isAccountCreated: false,
}

export const MainSlice = createSlice({
  name: 'MainSlice',
  initialState,
  reducers: {
    changeAuth(state: SliceState, action: PayloadAction<boolean>){
      state.isAuth = action.payload
    },
    changeLeftDrawer(state: SliceState, action: PayloadAction<boolean>){
      state.isLeftDrawerOpen = action.payload
    },
    changeIsAccountBeingCreated(state: SliceState, action: PayloadAction<boolean>){
      state.isAccountBeingCreated = action.payload
    },
    changeIsAccountCreated(state: SliceState, action: PayloadAction<boolean>){
      state.isAccountCreated = action.payload
    },
  }
})

export default MainSlice.reducer;