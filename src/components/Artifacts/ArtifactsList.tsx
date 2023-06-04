import { useAppSelector } from '../../hooks/reduxHooks';
import Typography from '@mui/material/Typography';
import { ArtifactArray } from '../../game/Artifacts/ArtifactArray';
import { ReactElement } from 'react';
import ArtifactsBlock from './ArtifactBlock/ArtifactsBlock';
import ArtifactsBlocks from './ArtifactBlock/ArtifactsBlocks';
import ArtifactsPagination from './ArtifactsPagination/ArtifactsPagination';

const ArtifactsList = () => {
	const {
		artifactsPage,
		artifactsType,
		artifactsSlot,
		artifactsPrice,
		artifactsSearchQuery,
	} = useAppSelector((state) => state.mainReducer);

	let finalArray = ArtifactArray.flat();
	const getArtifacts = (): ReactElement | ReactElement[] => {
		if (artifactsSlot && artifactsSlot !== 'Все') {
			finalArray = finalArray.filter(
				(artifact) => artifact.type === artifactsSlot
			);
		}
		if (artifactsType && artifactsType !== 'Все') {
			finalArray = finalArray.filter(
				(artifact) => artifact.rarity === artifactsType
			);
		}

		if (artifactsPrice && artifactsPrice !== 'Все') {
			if (artifactsPrice === 'Самая низкая') {
				finalArray = finalArray.sort((objA, objB) => objA.price - objB.price);
			}
			if (artifactsPrice === 'Самая высокая') {
				finalArray = finalArray.sort((objA, objB) => objB.price - objA.price);
			}
		}

		if (artifactsSearchQuery) {
			finalArray = finalArray.filter((artifact) =>
				artifact.name.toLowerCase().includes(artifactsSearchQuery.toLowerCase())
			);
		}

		if (finalArray.length >= 1) {
			return finalArray
				.slice((artifactsPage - 1) * 20, (artifactsPage - 1) * 20 + 20)
				.map((artifact, index) => (
					<ArtifactsBlock
						key={index}
						src={artifact.pic}
						name={artifact.name}
					/>
				));
		}
		return (
			<Typography
				color='primary'
				variant='h4'
				sx={{
					cursor: 'default',
					mb: 5,
				}}
			>
				Ничего не найдено
			</Typography>
		);
	};

	return (
		<>
			<ArtifactsBlocks getArtifacts={getArtifacts()} />
			<ArtifactsPagination finalArray={finalArray} />
		</>
	);
};

export default ArtifactsList;
