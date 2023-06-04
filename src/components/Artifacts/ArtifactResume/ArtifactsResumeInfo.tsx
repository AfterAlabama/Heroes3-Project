import Typography from '@mui/material/Typography';
import { CenteredFlex, ColumnedFlex } from '../../../styles/Flex';
import ResumeSectionHeader from '../../Common/ResumeSectionHeader/ResumeSectionHeader';
import { useArtifactsResumeContext } from './ArtifactsResume';
import IsLoading from '../../Common/IsLoading/IsLoading';

const ArtifactsResumeInfo = () => {
	const { name, rarity, type, effect } = useArtifactsResumeContext();
	const artifactInfo = [
		{
			label: 'Имя',
			value: name,
		},
		{
			label: 'Класс',
			value: rarity,
		},
		{
			label: 'Тип',
			value: type,
		},
		{
			label: 'Эффект',
			value: effect,
		},
	];
	return (
		<ColumnedFlex component='section'>
			<ResumeSectionHeader
				text='Информация'
				sx={{
					alignSelf: 'stretch',
				}}
			/>
			{artifactInfo.map((artifact, index) => (
				<CenteredFlex
					component='article'
					key={index}
					sx={(theme) => ({
						justifyContent: 'space-between',
						width: '85%',
						mr:10,
						borderBottom: `5px solid ${theme.palette.primary.main}`,
					})}
				>
					<IsLoading>
						<Typography fontSize={20}>{artifact.label}: </Typography>
					</IsLoading>
					<IsLoading>
						<Typography
							key={index}
							fontSize={20}
							textAlign={'right'}
							width={'50%'}
						>
							{artifact.value}
						</Typography>
					</IsLoading>
				</CenteredFlex>
			))}
		</ColumnedFlex>
	);
};

export default ArtifactsResumeInfo;
