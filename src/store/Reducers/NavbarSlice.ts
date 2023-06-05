import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NavbarSliceState {
  //checks if the navbar menu is open
	isLeftDrawerOpen: boolean;
  //checks the profile pic for navbar avatar
	profilePicFile: string | null;
}

const initialState: NavbarSliceState = {
	isLeftDrawerOpen: false,
	profilePicFile: null,
};

export const NavbarSlice = createSlice({
	name: 'NavbarSlice',
	initialState,
	reducers: {
		setLeftDrawer(state: NavbarSliceState, action: PayloadAction<boolean>) {
			state.isLeftDrawerOpen = action.payload;
		},
		setProfilePic(state: NavbarSliceState, action: PayloadAction<string>) {
			state.profilePicFile = action.payload;
		},
	},
});

export default NavbarSlice.reducer;
