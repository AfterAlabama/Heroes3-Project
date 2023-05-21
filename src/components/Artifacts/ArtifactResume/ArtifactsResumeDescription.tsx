import Typography from '@mui/material/Typography';
import { ColumnedFlex } from '../../../styles/Flex';
import ResumeSectionHeader from '../../Common/ResumeSectionHeader/ResumeSectionHeader';
import { useArtifactsResumeContext } from './ArtifactsResume';
import IsLoading from '../../Common/IsLoading/IsLoading';

const ArtifactsResumeDescription = () => {
	const { description } = useArtifactsResumeContext();
	return (
		<ColumnedFlex component='section'>
			<ResumeSectionHeader
				text='Описание'
				sx={{
					alignSelf: 'stretch',
				}}
			/>
			<IsLoading>
				<Typography
					fontSize={20}
					lineHeight={1.5}
				>
					{description}
				</Typography>
			</IsLoading>
		</ColumnedFlex>
	);
};

export default ArtifactsResumeDescription;
