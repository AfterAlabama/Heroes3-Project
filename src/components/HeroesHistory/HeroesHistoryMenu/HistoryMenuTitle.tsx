import Typography from '@mui/material/Typography';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import blue from '@mui/material/colors/blue';

const HistoryMenuTitle = () => {
	return (
		<Typography
			sx={{
				marginLeft: 10,
				cursor: 'default',
				marginBottom: 5,
				fontSize: 40,
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
