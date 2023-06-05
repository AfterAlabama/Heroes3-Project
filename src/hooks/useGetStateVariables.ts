import { AnimationSlice } from '../store/Reducers/AnimationSlice';
import { ArtifactSlice } from '../store/Reducers/ArtifactSlice';
import { FormSlice } from '../store/Reducers/FormSlice';
import { HeroSlice } from '../store/Reducers/HeroSlice';
import { NavbarSlice } from '../store/Reducers/NavbarSlice';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useGetStateVariables = () => {
	const dispatch = useAppDispatch();
	const [animationState, artifactState, formState, heroState, navbarState] =
		useAppSelector((state) => [
			state.animationReducer,
			state.artifactReducer,
			state.formReducer,
			state.heroReducer,
			state.navbarReducer,
		]);
	const [
		animationAction,
		artifactAction,
		formAction,
		heroAction,
		navbarAction,
	] = [
		FormSlice.actions,
		AnimationSlice.actions,
		ArtifactSlice.actions,
		HeroSlice.actions,
		NavbarSlice.actions,
	];

	return {
		dispatch,
		...animationState,
		...artifactState,
		...formState,
		...heroState,
		...navbarState,
		...animationAction,
		...artifactAction,
		...formAction,
		...heroAction,
		...navbarAction,
	};
};
