import Box from '@mui/material/Box';
import { createContext, FC, ReactElement } from 'react';
import Footer from '../Footer/Footer';
import BlockGrid from '../GridSection/BlockGrid';
import Main from './Main';

interface MainPageProps {
	Text: ReactElement<HTMLSpanElement>;
	loginButtonOrContent: ReactElement<HTMLButtonElement | HTMLDivElement>;
}

export const MainPageContext = createContext<MainPageProps>(
	{} as MainPageProps
);

const MainPage: FC<MainPageProps> = ({ Text, loginButtonOrContent }) => {
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
