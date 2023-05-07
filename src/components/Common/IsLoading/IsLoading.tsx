import Skeleton from '@mui/material/Skeleton';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { SxProps, Theme } from '@mui/material/styles';

interface IsLoadingProps {
	children: ReactNode;
	sx?: SxProps<Theme>;
}

const IsLoading: FC<IsLoadingProps> = ({ children, sx = [] }) => {
	const { isComponentLoading } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { changeIsComponentLoading } = MainSlice.actions;
	const timer = useRef(0);

	useEffect(() => {
		timer.current = window.setTimeout(() => {
			dispatch(changeIsComponentLoading(false));
		}, 1000);

		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	const sxCondition = [...(Array.isArray(sx) ? sx : [sx])];

	const loadingCondition = isComponentLoading ? (
		<Skeleton animation={'wave'} sx={sxCondition}>{children}</Skeleton>
	) : (
		<>{children}</>
	);

	return <>{loadingCondition}</>;
};

export default IsLoading;
