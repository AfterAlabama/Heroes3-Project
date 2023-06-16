import Typography from '@mui/material/Typography';

const NoArtifactsFound = () => {
	return (
		<Typography
			color='primary'
			variant='h4'
			sx={{
				cursor: 'default',
				mb: 5,
			}}
		>
			Ничего не найдено
		</Typography>
	);
};

export default NoArtifactsFound;
