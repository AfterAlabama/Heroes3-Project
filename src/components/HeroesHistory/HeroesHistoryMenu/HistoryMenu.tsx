import Box from '@mui/material/Box';
import HistoryMenuTabs from './HistoryMenuTabs';
import HistoryMenuTabPanels from './HistoryMenuTabPanels';
import Typography from '@mui/material/Typography';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import blue from '@mui/material/colors/blue';

const HistoryMenu = () => {
	return (
		<Box>
			<Typography sx={{
				marginLeft: 10,
				cursor: 'default',
				marginBottom:5,
				fontSize: 40,
			}} >Просмотр Героев{' '} <ContentPasteSearchIcon sx={{
				color: blue[200]
			}} /> </Typography>
			<Box
				sx={{
					bgcolor: 'background.paper',
					height: '120vh',
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
