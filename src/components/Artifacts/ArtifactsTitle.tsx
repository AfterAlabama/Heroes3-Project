import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const ArtifactsTitle = () => {
	return (
		<Box
			mt={10}
			mb={10}
			sx={{
				cursor: 'default',
			}}
		>
			<Typography
				variant='h3'
				sx={(theme) => ({
					color: theme.palette.primary.main,
					mb: 2,
				})}
			>
				Артефакты
			</Typography>
			<Divider />
		</Box>
	);
};

export default ArtifactsTitle;
