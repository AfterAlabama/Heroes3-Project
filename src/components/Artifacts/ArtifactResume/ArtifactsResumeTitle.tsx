import Typography from '@mui/material/Typography';
import { useArtifactsResumeContext } from './ArtifactsResume';
import IsLoading from '../../Common/IsLoading/IsLoading';

const ArtifactsResumeTitle = () => {
	const { name } = useArtifactsResumeContext();
	return (
		<IsLoading>
			<Typography
				color='primary'
				variant='h1'
				fontSize={50}
				mt={10}
			>
				{name}
			</Typography>
		</IsLoading>
	);
};

export default ArtifactsResumeTitle;
