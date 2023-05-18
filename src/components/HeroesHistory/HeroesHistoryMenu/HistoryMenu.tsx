import Box from '@mui/material/Box';
import HistoryMenuTabs from './HistoryMenuTabs';
import HistoryMenuTabPanels from './HistoryMenuTabPanels';
import HistoryMenuTitle from './HistoryMenuTitle';

const HistoryMenu = () => {
	return (
		<Box component='main' sx={{
			mb: -15
		}} >
			<HistoryMenuTitle />
			<Box
				sx={{
					bgcolor: 'background.paper',
					height: '130vh',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					ml: 10,
					mr: 10,
					mb:30
				}}
			>
				<HistoryMenuTabs />
				<HistoryMenuTabPanels />
			</Box>
		</Box>
	);
};

export default HistoryMenu;
