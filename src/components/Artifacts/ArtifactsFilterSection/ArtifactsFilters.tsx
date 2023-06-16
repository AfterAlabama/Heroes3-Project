import { forwardRef } from 'react';
import { CenteredFlex } from '../../../styles/Flex';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import IsLoading from '../../Common/IsLoading/IsLoading';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';
import { FilterParams } from './Logic/FilterParams';
import ArtifactsFilterSelectValues from './ArtifactsFilterSelectValues';

const ArtifactsFilter = forwardRef<HTMLDivElement>((_, ref) => {
	const {
		setArtifactsType,
		setArtifactsPrice,
		setArtifactsSlot,
		artifactsType,
		artifactsPrice,
		artifactsSlot,
	} = useGetStateVariables();

	return (
		<CenteredFlex
			component='section'
			ref={ref}
			sx={(theme) => ({
				width: '500px',
				height: '0px',
				borderBottom: `1px solid ${theme.palette.primary.main}`,
				backgroundColor: '#F0F8FF',
				borderTop: `1px solid ${theme.palette.primary.main}`,
				alignItems: 'flex-start',
				gap: 8,
				overflow: 'hidden',
			})}
		>
			{FilterParams(
				setArtifactsType,
				setArtifactsPrice,
				setArtifactsSlot,
				artifactsType,
				artifactsPrice,
				artifactsSlot
			).map((array, index) => (
				<FormControl
					component='article'
					key={index}
					sx={{
						width: '100px',
						mt: 10,
					}}
				>
					<IsLoading>
						<InputLabel>{array.label}</InputLabel>
					</IsLoading>
					<ArtifactsFilterSelectValues array={array} />
				</FormControl>
			))}
		</CenteredFlex>
	);
});

export default ArtifactsFilter;
