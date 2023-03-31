import Box from '@mui/material/Box';
import { createContext, FC, ReactElement } from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BlockGrid from '../GridSection/BlockGrid';
import Main from './Main';

interface MainPageProps {
	Text: ReactElement<HTMLSpanElement>;
	loginButton: ReactElement<HTMLButtonElement>;
}

export const MainPageContext = createContext<MainPageProps>(
	{} as MainPageProps
);

const MainPage: FC<MainPageProps> = ({ Text, loginButton }) => {
	return (
		<MainPageContext.Provider value={{ Text, loginButton }}>
			<Box
				sx={{
					backgroundColor: '#f4f4f4',
				}}
			>
				<Navbar />
				<Main />
				<BlockGrid />
				<Footer />
			</Box>
		</MainPageContext.Provider>
	);
};

export default MainPage;
