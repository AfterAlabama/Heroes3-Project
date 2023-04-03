import Box from '@mui/material/Box';
import LayoutCircle from '../Layout/LayoutCircle';
import LayoutImage from '../Layout/LayoutImage';
import MainContent from './MainContent';

const Main = () => {
	return (
		<header>
			<Box
				sx={{
					height: '100vh',
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<MainContent/>
				<LayoutImage />
				<LayoutCircle />
			</Box>
		</header>
	);
};

export default Main;
