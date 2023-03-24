import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SliceState {
  isAuth: boolean
}

const initialState: SliceState = {
  isAuth: false
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