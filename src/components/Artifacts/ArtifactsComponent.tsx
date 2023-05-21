import Box from '@mui/material/Box';
import ArtifactsTitle from './ArtifactsTitle';
import ArtifactsFilterSection from './ArtifactsFilterSection/ArtifactsFilterSection';
import ArtifactsSearchBar from './ArtifactsSearchBar';
import ArtifactsList from './ArtifactsList';
import { useCallOnloadAnimation } from '../../hooks/useCallOnloadAnimation';

const ArtifactsComponent = () => {
	useCallOnloadAnimation();
	return (
		<Box
			component='main'
			mr={30}
			ml={30}
			sx={{
				cursor: 'default',
			}}
		>
			<ArtifactsTitle />
			<ArtifactsFilterSection />
			<ArtifactsSearchBar />
			<ArtifactsList />
		</Box>
	);
};

export default ArtifactsComponent;
