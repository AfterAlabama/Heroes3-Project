import Box from '@mui/material/Box';
import { useArtifactsResumeContext } from './ArtifactsResume';
import IsLoading from '../../Common/IsLoading/IsLoading';

const ArtifactsResumePic = () => {
	const { pic } = useArtifactsResumeContext();
	return (
		<IsLoading>
			<Box
				component='img'
				src={pic}
				alt='artifact Picture'
				width={150}
				height={150}
				borderRadius={'50%'}
				alignSelf='center'
			/>
		</IsLoading>
	);
};

export default ArtifactsResumePic;
