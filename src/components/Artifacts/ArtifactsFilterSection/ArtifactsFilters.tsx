import { forwardRef } from 'react';
import { CenteredFlex } from '../../../styles/Flex';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ArtifactTypes } from '../../../types/Enums/ArtifactTypes';
import { ArtifactRarity } from '../../../types/Enums/ArtifactRarity';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { AnyAction } from '@reduxjs/toolkit';
import IsLoading from '../../Common/IsLoading/IsLoading';

const ArtifactsFilter = forwardRef<HTMLDivElement>((_, ref) => {
	const { artifactsType, artifactsPrice, artifactsSlot } = useAppSelector(
		(state) => state.mainReducer
	);
	const dispatch = useAppDispatch();
	const { setArtifactsType, setArtifactsPrice, setArtifactsSlot } =
		MainSlice.actions;

	const selectChangeHandler = (
		e: SelectChangeEvent,
		stateFunc: (state: string) => AnyAction
	) => {
		dispatch(stateFunc(e.target.value));
	};

	const filterParams = [
		{
			label: 'Слот',
			value: artifactsSlot,
			stateFunc: setArtifactsSlot,
			items: ArtifactTypes,
		},
		{
			label: 'Тип',
			value: artifactsType,
			stateFunc: setArtifactsType,
			items: ArtifactRarity,
		},
		{
			label: 'Цена',
			value: artifactsPrice,
			stateFunc: setArtifactsPrice,
			items: ['Самая низкая', 'Самая высокая'],
		},
	];

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
			{filterParams.map((array, index) => (
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
					<IsLoading>
						<Select
							value={array.value}
							label={array.label}
							onChange={(e) => selectChangeHandler(e, array.stateFunc)}
							sx={{
								backgroundColor: 'white',
							}}
						>
							<MenuItem value='Все'>Все</MenuItem>
							{Object.values(array.items).map((value, index) => (
								<MenuItem
									key={index}
									value={value}
								>
									{value}
								</MenuItem>
							))}
						</Select>
					</IsLoading>
				</FormControl>
			))}
		</CenteredFlex>
	);
});

export default ArtifactsFilter;
