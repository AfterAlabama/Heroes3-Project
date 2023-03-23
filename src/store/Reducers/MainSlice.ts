import { createSlice } from "@reduxjs/toolkit";


interface SliceState {
  isAuth: boolean
}

const initialState: SliceState = {
  isAuth: false
}

export const MainSlice = createSlice({
  name: 'MainSlice',
  initialState,
  reducers: {}
})

export default MainSlice.reducer;