import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ArtifactSliceState {
  // checks the page for artifacts pagination
	artifactsPage: number;
  // checks if the artifacts filter section is open
	isArtifactsFilterOpen: boolean;
  // checks artifacts filter values for type, slot and price
	artifactsType: string;
	artifactsSlot: string;
	artifactsPrice: string;
  // checks artifacts search input
	artifactsSearchQuery: string;
}

const initialState: ArtifactSliceState = {
	artifactsPage: 1,
	isArtifactsFilterOpen: false,
	artifactsType: '',
	artifactsSlot: '',
	artifactsPrice: '',
	artifactsSearchQuery: '',
};

export const ArtifactSlice = createSlice({
	name: 'ArtifactSlice',
	initialState,
	reducers: {
		setArtifactsPage(state: ArtifactSliceState, action: PayloadAction<number>) {
			state.artifactsPage = action.payload;
		},
		setArtifactsFilter(state: ArtifactSliceState, action: PayloadAction<boolean>) {
			state.isArtifactsFilterOpen = action.payload;
		},
		setArtifactsType(state: ArtifactSliceState, action: PayloadAction<string>) {
			state.artifactsType = action.payload;
		},
		setArtifactsSlot(state: ArtifactSliceState, action: PayloadAction<string>) {
			state.artifactsSlot = action.payload;
		},
		setArtifactsPrice(state: ArtifactSliceState, action: PayloadAction<string>) {
			state.artifactsPrice = action.payload;
		},
		setArtifactsSearchQuery(state: ArtifactSliceState, action: PayloadAction<string>) {
			state.artifactsSearchQuery = action.payload;
		},
	},
});

export default ArtifactSlice.reducer;
