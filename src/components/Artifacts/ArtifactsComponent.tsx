import Box from '@mui/material/Box';
import { ArtifactArray } from '../../artifacts/ArtifactArray';
import { ChangeEvent } from 'react';
import ArtifactsBlock from './ArtifactsBlock';
import Pagination from '@mui/material/Pagination';
import ArtifactsTitle from './ArtifactsTitle';
import ArtifactsFilterSection from './ArtifactsFilterSection';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { MainSlice } from '../../store/Reducers/MainSlice';
import Typography from '@mui/material/Typography';
import ArtifactsSearchBar from './ArtifactsSearchBar';

const ArtifactsComponent = () => {
	const dispatch = useAppDispatch();
	const { artifactsPage, artifactsType, artifactsSlot, artifactsPrice, artifactsSearchQuery } = useAppSelector(
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
		
		if(artifactsSearchQuery){
			finalArray = finalArray.filter(artifact => artifact.name.toLowerCase().includes(artifactsSearchQuery.toLowerCase()))
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
			return <Typography color='primary' variant='h4' sx={{
				cursor: 'default',
				mb: 5
			}} >Ничего не найдено</Typography>;
		}
	};

	return (
		<Box
			mr={30}
			ml={30}
		>
			<ArtifactsTitle />
			<ArtifactsFilterSection />
			<ArtifactsSearchBar />
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 5,
					mb: 5
				}}
			>
				{getArtifacts()}
			</Box>
			<Pagination
				page={artifactsPage}
				onChange={pageChangeHandler}
				count={Math.ceil(finalArray.length / 20)}
				size='large'
				sx={{
					mb: 5,
				}}
			/>
		</Box>
	);
};

export default ArtifactsComponent;
