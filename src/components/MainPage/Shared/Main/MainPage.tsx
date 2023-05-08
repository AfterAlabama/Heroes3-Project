import Box from '@mui/material/Box';
import { createContext, FC, ReactElement, useEffect } from 'react';
import Footer from '../Footer/Footer';
import BlockGrid from '../GridSection/BlockGrid';
import Main from './Main';
import { useAppDispatch } from '../../../../hooks/ReduxHooks';
import { MainSlice } from '../../../../store/Reducers/MainSlice';

interface MainPageProps {
	Text: ReactElement<HTMLSpanElement>;
	loginButtonOrContent: ReactElement<HTMLButtonElement | HTMLDivElement>;
}

export const MainPageContext = createContext<MainPageProps>(
	{} as MainPageProps
);

const MainPage: FC<MainPageProps> = ({ Text, loginButtonOrContent }) => {
	const dispatch = useAppDispatch()
	const { changeIsComponentLoading } = MainSlice.actions;

	useEffect(() => {
		dispatch(changeIsComponentLoading(true))
	}, [])

	return (
		<MainPageContext.Provider value={{ Text, loginButtonOrContent }}>
			<Box
				sx={{
					backgroundColor: '#f4f4f4',
				}}
			>
				<Main />
				<BlockGrid />
				<Footer />
			</Box>
		</MainPageContext.Provider>
	);
};

export default MainPage;
