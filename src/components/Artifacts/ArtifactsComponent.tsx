import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { ArtifactArray } from '../../artifacts/ArtifactArray';
import { ChangeEvent } from 'react';
import ArtifactsBlock from './ArtifactsBlock';
import Pagination from '@mui/material/Pagination';
import ArtifactsTitle from './ArtifactsTitle';
import ArtifactsFilterSection from './ArtifactsFilterSection';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { MainSlice } from '../../store/Reducers/MainSlice';
import Typography from '@mui/material/Typography';

const ArtifactsComponent = () => {
	const dispatch = useAppDispatch();
	const { artifactsPage, artifactsType, artifactsSlot, artifactsPrice } = useAppSelector(
		(state) => state.mainReducer
	);
	const { setArtifactsPage } = MainSlice.actions;

	const pageChangeHandler = (e: ChangeEvent<unknown>, value: number) => {
		dispatch(setArtifactsPage(value));
	};

	let finalArray = ArtifactArray.flat();

	const getArtifacts = () => {
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

		if(artifactsPrice && artifactsPrice !== 'Все'){
			if(artifactsPrice === 'Less'){
				finalArray = finalArray.sort((objA, objB) => objA.price - objB.price)
			}
			if(artifactsPrice === 'Greater'){
				finalArray = finalArray.sort((objA, objB) => objB.price - objA.price)
			}
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
		if (finalArray.length < 1) {
			return <Typography>Ничего не найдено</Typography>;
		}
	};

	return (
		<Box
			mr={30}
			ml={30}
		>
			<ArtifactsTitle />
			<ArtifactsFilterSection />
			<Box mb={5}>
				<InputLabel>Искать по названию</InputLabel>
				<Input placeholder='Крылья ангела...' />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 5,
				}}
			>
				{getArtifacts()}
			</Box>
			<Pagination
				page={artifactsPage}
				onChange={pageChangeHandler}
				count={Math.ceil(finalArray.length / 20)}
			/>
		</Box>
	);
};

export default ArtifactsComponent;
