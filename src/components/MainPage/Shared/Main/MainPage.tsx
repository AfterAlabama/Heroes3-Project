import Box from '@mui/material/Box';
import { createContext, FC, ReactElement, useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/ReduxHooks';
import { MainSlice } from '../../../../store/Reducers/MainSlice';
import BlockStack from '../BlockSection/BlockStack';
import MainPageHeader from './MainPageHeader';

interface MainPageProps {
	Text: ReactElement<HTMLSpanElement>;
	loginButtonOrContent: ReactElement<HTMLButtonElement | HTMLDivElement>;
}

export const MainPageContext = createContext<MainPageProps>(
	{} as MainPageProps
);

const MainPage: FC<MainPageProps> = ({ Text, loginButtonOrContent }) => {
	const dispatch = useAppDispatch();
	const { changeIsComponentLoading } = MainSlice.actions;

	useEffect(() => {
		dispatch(changeIsComponentLoading(true));
	}, []);

	return (
		<MainPageContext.Provider value={{ Text, loginButtonOrContent }}>
			<Box
				component='main'
				sx={{
					backgroundColor: '#f4f4f4',
					pb: 30,
				}}
			>
				<MainPageHeader />
				<BlockStack />
			</Box>
		</MainPageContext.Provider>
	);
};

export default MainPage;
