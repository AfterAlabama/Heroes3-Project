import Paper from '@mui/material/Paper';
import ArtifactsResumeInfo from './ArtifactsResumeInfo';
import ArtifactsResumeDescription from './ArtifactsResumeDescription';
import ArtifactsResumePic from './ArtifactsResumePic';

const ArtifactsResumeContent = () => {
	return (
		<Paper
			component='main'
			sx={{
				width: '80vh',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				borderRadius: '10px',
				pl: 5,
				mb: 10,
			}}
			elevation={3}
		>
			<ArtifactsResumePic />
			<ArtifactsResumeInfo />
			<ArtifactsResumeDescription />
		</Paper>
	);
};

export default ArtifactsResumeContent;
