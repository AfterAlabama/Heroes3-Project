import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCookieValue } from "../../helpers/Cookie/GetCookieValues";

interface SliceState {
  isAuth: boolean
}

const initialState: SliceState = {
  isAuth: GetCookieValue('email') && GetCookieValue('password') ? true : false
}

export const MainSlice = createSlice({
  name: 'MainSlice',
  initialState,
  reducers: {
    changeAuth(state: SliceState, action: PayloadAction<boolean>){
      state.isAuth = action.payload
    }
  }
})

export default MainSlice.reducer;