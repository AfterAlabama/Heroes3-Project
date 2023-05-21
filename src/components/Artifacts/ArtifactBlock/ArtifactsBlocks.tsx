import Box from '@mui/material/Box';
import { ReactElement } from 'react';
import IsLoading from '../../Common/IsLoading/IsLoading';

const ArtifactsBlocks = ({ getArtifacts }: { getArtifacts: ReactElement | ReactElement[]}) => {
	return (
		<IsLoading>
			<Box
				component='section'
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 5,
					mb: 5,
				}}
			>
				{getArtifacts}
			</Box>
		</IsLoading>
	);
};

export default ArtifactsBlocks;
