import Box from '@mui/material/Box';
import { Link as ReactRouterLink } from 'react-router-dom';
import { RouteNames } from '../../../types/Enums/RouteNames';
import Link from '@mui/material/Link';
import ArtifactsBlockContent from './ArtifactsBlockContent';
import { useArtifactsBlockContext } from '../ArtifactsList/ArtifactsList';

const ArtifactsBlock = () => {
	const { name } = useArtifactsBlockContext();

	return (
		<Box component='article'>
			<Link
				component={ReactRouterLink}
				to={`${RouteNames.ARTIFACTS}/${name}`}
				sx={{
					textDecoration: 'none',
				}}
				onClick={() => window.scrollTo(0, 0)}
			>
				<ArtifactsBlockContent />
			</Link>
		</Box>
	);
};

export default ArtifactsBlock;
