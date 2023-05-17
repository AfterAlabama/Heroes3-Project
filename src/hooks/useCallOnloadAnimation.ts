import { useEffect } from 'react';
import { MainSlice } from '../store/Reducers/MainSlice';
import { useAppDispatch } from './reduxHooks';

//triggers a skeleton animation on load
export const useCallOnloadAnimation = () => {
	const dispatch = useAppDispatch();
	const { changeIsComponentLoading } = MainSlice.actions;

	useEffect(() => {
		dispatch(changeIsComponentLoading(true));
	}, []);
};
