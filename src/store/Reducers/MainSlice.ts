import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCookieValue } from "../../helpers/Cookie/GetCookieValues";

interface SliceState {
  isAuth: boolean,
  isLeftDrawerOpen: boolean
}

const initialState: SliceState = {
  isAuth: GetCookieValue('email') && GetCookieValue('password') ? true : false,
  isLeftDrawerOpen: false
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
    }
  }
})

export default MainSlice.reducer;