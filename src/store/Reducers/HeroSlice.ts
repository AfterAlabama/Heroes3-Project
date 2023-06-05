import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface HeroSliceState {
  //checks which tab panel to show now depending on the menu tab value
  heroesMenuTabValue: number,
  //checks if hero accordion was expended due to mouseOver
  isAccordionExpended: string | boolean,
  //checks the hero pagination page for accordions
  heroesPage:number;
}

const initialState: HeroSliceState = {
  heroesMenuTabValue: 0,
  isAccordionExpended: 'panel1',
  heroesPage: 1,
}

export const HeroSlice = createSlice({
  name: 'HeroSlice',
  initialState,
  reducers: {
    setHeroesMenuTabValue(state: HeroSliceState, action: PayloadAction<number>){
      state.heroesMenuTabValue = action.payload
    },
    setAccordion(state: HeroSliceState, action: PayloadAction<string | boolean>){
      state.isAccordionExpended = action.payload
    },
    setHeroesPage(state: HeroSliceState, action: PayloadAction<number>){
      state.heroesPage = action.payload
    },
  }
})

export default HeroSlice.reducer;