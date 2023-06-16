import Typography from '@mui/material/Typography';
import { useArtifactsBlockContext } from '../ArtifactsList/ArtifactsList';

const ArtifactsBlockName = () => {
	const { name } = useArtifactsBlockContext();
	return (
		<Typography
			sx={{
				fontSize: 12,
				textAlign: 'center',
				margin: '0 15px',
			}}
		>
			{name}
		</Typography>
	);
};

export default ArtifactsBlockName;
