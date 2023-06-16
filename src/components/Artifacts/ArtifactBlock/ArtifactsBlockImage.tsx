import Box from '@mui/material/Box';
import { useArtifactsBlockContext } from '../ArtifactsList/ArtifactsList';

const ArtifactsBlockImage = () => {
	const { src } = useArtifactsBlockContext();
	return (
		<Box
			component='img'
			src={src}
			sx={{
				height: '40%',
				width: '40%',
				borderRadius: '15px',
				transition: 'all 0.5s ease',
			}}
		/>
	);
};

export default ArtifactsBlockImage;
