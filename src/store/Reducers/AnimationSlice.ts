import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AnimationSliceState {
	//checks if the component has the skeleton animation for loading effect
	isComponentLoading: boolean;
}

const initialState: AnimationSliceState = {
	isComponentLoading: true,
};

export const AnimationSlice = createSlice({
	name: 'AnimationSlice',
	initialState,
	reducers: {
		setIsComponentLoading(state: AnimationSliceState, action: PayloadAction<boolean>) {
			state.isComponentLoading = action.payload;
		},
	},
});

export default AnimationSlice.reducer;
