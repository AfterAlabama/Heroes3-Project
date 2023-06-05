import Skeleton from '@mui/material/Skeleton';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { GetSxProp } from '../../../helpers/GetSxProp/GetSxProp';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

interface IsLoadingProps {
	children: ReactNode;
	sx?: SxProps<Theme>;
}

const IsLoading: FC<IsLoadingProps> = ({ children, sx = [] }) => {
	const { setIsComponentLoading, dispatch, isComponentLoading } =
		useGetStateVariables();
	const timer = useRef(0);

	useEffect(() => {
		timer.current = window.setTimeout(() => {
			dispatch(setIsComponentLoading(false));
		}, 1000);

		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	const loadingCondition = isComponentLoading ? (
		<Skeleton
			animation={'wave'}
			sx={GetSxProp(sx)}
		>
			{children}
		</Skeleton>
	) : (
		<>{children}</>
	);

	return <>{loadingCondition}</>;
};

export default IsLoading;
