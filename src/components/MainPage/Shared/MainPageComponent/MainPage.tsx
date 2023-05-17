import Box from '@mui/material/Box';
import { createContext, FC, ReactElement } from 'react';
import BlockStack from '../BlockSection/BlockStack';
import MainPageHeader from './MainPageHeader';
import { useCallOnloadAnimation } from '../../../../hooks/useCallOnloadAnimation';

interface MainPageProps {
	Text: ReactElement<HTMLSpanElement>;
	loginButtonOrContent: ReactElement<HTMLButtonElement | HTMLDivElement>;
}

export const MainPageContext = createContext<MainPageProps>(
	{} as MainPageProps
);

const MainPage: FC<MainPageProps> = ({ Text, loginButtonOrContent }) => {
	useCallOnloadAnimation()
	
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
