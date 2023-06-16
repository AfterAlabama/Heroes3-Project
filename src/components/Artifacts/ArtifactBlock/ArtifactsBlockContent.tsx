import { ColumnedFlex } from '../../../styles/Flex';
import ArtifactsBlockImage from './ArtifactsBlockImage';
import ArtifactsBlockName from './ArtifactsBlockName';

const ArtifactsBlockContent = () => {
	return (
		<ColumnedFlex
			sx={(theme) => ({
				width: '150px',
				height: '150px',
				borderRadius: '5px',
				border: '2px solid blue',
				gap: 1,
				cursor: 'pointer',
				color: 'grey',
				boxShadow: '5px 5px 15px rgba(0,0,0,0.5)',
				transition: 'all 0.5s ease',
				'&:hover': {
					transform: 'scale(1.2)',
					boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
					backgroundColor: theme.palette.primary.main,
					borderRadius: '50%',
					color: 'white',
					border: `2px solid ${theme.palette.primary.main}`,
					'& > img': {
						borderRadius: '50%',
					},
				},
			})}
		>
			<ArtifactsBlockImage />
			<ArtifactsBlockName />
		</ColumnedFlex>
	);
};

export default ArtifactsBlockContent;
