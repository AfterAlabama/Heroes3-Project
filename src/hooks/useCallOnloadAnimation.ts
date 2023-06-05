import { useEffect } from 'react';
import { useGetStateVariables } from './useGetStateVariables';

//triggers a skeleton animation on load
export const useCallOnloadAnimation = () => {
	const { setIsComponentLoading, dispatch } = useGetStateVariables();

	useEffect(() => {
		dispatch(setIsComponentLoading(true));
	}, []);
};
