import Typography from '@mui/material/Typography';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import blue from '@mui/material/colors/blue';

const HistoryMenuTitle = () => {
	return (
		<Typography
			variant='h2'
			sx={{
				cursor: 'default',
				fontSize: 50,
				alignSelf: 'flex-start',
				ml: 10
			}}
		>
			Просмотр Героев{' '}
			<ContentPasteSearchIcon
				sx={{
					color: blue[200],
				}}
			/>{' '}
		</Typography>
	);
};

export default HistoryMenuTitle;
