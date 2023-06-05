import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetCookieValue } from "../../helpers/Cookie/GetCookieValues";
import { CookieNames } from "../../types/Enums/CookieNames";

interface FormSliceState {
  //checks if account is registered
  isAuth: boolean,
  //checks if snackbar opens after successful registration
  isRegistrationSnackbarOpen: boolean,
  //checks if snackbar opens after successful password change
  isPasswordSnackbarOpen: boolean,
  //checks if account has been just created or is currently being created for the registration modal
  isAccountBeingCreated: boolean,
  isAccountCreated: boolean,
}

const initialState: FormSliceState = {
  isAuth: GetCookieValue(CookieNames.ISLOGGED) ? true : false,
  isPasswordSnackbarOpen: false,
  isRegistrationSnackbarOpen: false,
  isAccountBeingCreated: false,
  isAccountCreated: false,
}

export const FormSlice = createSlice({
  name: 'FormSlice',
  initialState,
  reducers: {
    setAuth(state: FormSliceState, action: PayloadAction<boolean>){
      state.isAuth = action.payload
    },
    setIsRegistrationSnackbarOpen(state: FormSliceState, action: PayloadAction<boolean>){
      state.isRegistrationSnackbarOpen = action.payload
    },
    setIsPasswordSnackbarOpen(state: FormSliceState, action: PayloadAction<boolean>){
      state.isPasswordSnackbarOpen = action.payload
    },
    setIsAccountBeingCreated(state: FormSliceState, action: PayloadAction<boolean>){
      state.isAccountBeingCreated = action.payload
    },
    setIsAccountCreated(state: FormSliceState, action: PayloadAction<boolean>){
      state.isAccountCreated = action.payload
    },
  }
})

export default FormSlice.reducer;