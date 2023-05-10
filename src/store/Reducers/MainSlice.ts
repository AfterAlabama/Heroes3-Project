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
  heroesPage:number;
  artifactsPage:number;
  isArtifactsFilterOpen: boolean;
  artifactsType: string;
  artifactsSlot: string;
  artifactsPrice: string;
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
  heroesPage: 1,
  artifactsPage: 1,
  isArtifactsFilterOpen: false,
  artifactsType: '',
  artifactsSlot: '',
  artifactsPrice: '',
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
    setHeroesPage(state: SliceState, action: PayloadAction<number>){
      state.heroesPage = action.payload
    },
    setArtifactsPage(state: SliceState, action: PayloadAction<number>){
      state.artifactsPage = action.payload
    },
    setArtifactsFilter(state: SliceState, action: PayloadAction<boolean>){
      state.isArtifactsFilterOpen = action.payload
    },
    setArtifactsType(state: SliceState, action: PayloadAction<string>){
      state.artifactsType = action.payload
    },
    setArtifactsSlot(state: SliceState, action: PayloadAction<string>){
      state.artifactsSlot = action.payload
    },
    setArtifactsPrice(state: SliceState, action: PayloadAction<string>){
      state.artifactsPrice = action.payload
    },

  }
})

export default MainSlice.reducer;