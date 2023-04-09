import Typography from '@mui/material/Typography';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import blue from '@mui/material/colors/blue';

const HistoryMenuTitle = () => {
	return (
		<Typography
			variant='h3'
			sx={{
				ml: 10,
				cursor: 'default',
				mb: 5,
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
