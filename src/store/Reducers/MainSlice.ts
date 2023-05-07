import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCookieValue } from "../../helpers/Cookie/GetCookieValues";

interface SliceState {
  isAuth: boolean,
  isLeftDrawerOpen: boolean,
  isAccountBeingCreated: boolean,
  isAccountCreated: boolean,
  heroesMenuTabValue: number,
  isAccordionExpended: string | boolean,
  isComponentLoading: boolean,
  isRegistrationSnackbarOpen: boolean,
  isPasswordSnackbarOpen: boolean,
}

const initialState: SliceState = {
  isAuth: GetCookieValue('Login') ? true : false,
  isLeftDrawerOpen: false,
  isAccountBeingCreated: false,
  isAccountCreated: false,
  heroesMenuTabValue: 0,
  isAccordionExpended: 'panel1',
  isComponentLoading: true,
  isPasswordSnackbarOpen: false,
  isRegistrationSnackbarOpen: false,
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
    changeHeroesMenuTabValue(state: SliceState, action: PayloadAction<number>){
      state.heroesMenuTabValue = action.payload
    },
    toggleAccordion(state: SliceState, action: PayloadAction<string | boolean>){
      state.isAccordionExpended = action.payload
    },
    changeIsComponentLoading(state: SliceState, action: PayloadAction<boolean>){
      state.isComponentLoading = action.payload
    },
    changeIsRegistrationSnackbarOpen(state: SliceState, action: PayloadAction<boolean>){
      state.isRegistrationSnackbarOpen = action.payload
    },
    changeIsPasswordSnackbarOpen(state: SliceState, action: PayloadAction<boolean>){
      state.isPasswordSnackbarOpen = action.payload
    },
  }
})

export default MainSlice.reducer;