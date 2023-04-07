import Box from '@mui/material/Box';
import HistoryMenuTabs from './HistoryMenuTabs';
import HistoryMenuTabPanels from './HistoryMenuTabPanels';
import HistoryMenuTitle from './HistoryMenuTitle';

const HistoryMenu = () => {
	return (
		<Box sx={{
			marginBottom: -15
		}} >
			<HistoryMenuTitle />
			<Box
				sx={{
					bgcolor: 'background.paper',
					height: '130vh',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					marginLeft: 10,
					marginRight: 10
				}}
			>
				<HistoryMenuTabs />
				<HistoryMenuTabPanels />
			</Box>
		</Box>
	);
};

export default HistoryMenu;
