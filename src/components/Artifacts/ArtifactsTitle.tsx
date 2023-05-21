import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IsLoading from '../Common/IsLoading/IsLoading';

const ArtifactsTitle = () => {
	return (
		<Box mb={10} mt={10} >
			<IsLoading>
				<Typography
					variant='h1'
					sx={(theme) => ({
						color: theme.palette.primary.main,
						mb: 2,
						fontSize: 50
					})}
				>
					Артефакты
				</Typography>
			</IsLoading>
			<Divider />
		</Box>
	);
};

export default ArtifactsTitle;
