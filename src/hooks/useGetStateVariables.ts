import { MainSlice } from '../store/Reducers/MainSlice';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useGetStateVariables = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.mainReducer);
	const actions = MainSlice.actions;

	return { dispatch, ...state, ...actions };
};
