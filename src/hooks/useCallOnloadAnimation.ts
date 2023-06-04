import { useEffect } from 'react';
import { useGetStateVariables } from './useGetStateVariables';

//triggers a skeleton animation on load
export const useCallOnloadAnimation = () => {
	const { changeIsComponentLoading, dispatch } = useGetStateVariables();

	useEffect(() => {
		dispatch(changeIsComponentLoading(true));
	}, []);
};
