import Select, { SelectChangeEvent } from '@mui/material/Select';
import IsLoading from '../../Common/IsLoading/IsLoading';
import MenuItem from '@mui/material/MenuItem';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';
import { AnyAction } from '@reduxjs/toolkit';
import { FC } from 'react';
import { ArtifactTypes } from '../../../types/Enums/ArtifactTypes';
import { ArtifactRarity } from '../../../types/Enums/ArtifactRarity';

interface ArtifactsFilterSelectValuesProps {
	array: {
		value: string;
		label: string;
		stateFunc: (st: string) => AnyAction;
		items: typeof ArtifactTypes | typeof ArtifactRarity | string[];
	};
}

const ArtifactsFilterSelectValues: FC<ArtifactsFilterSelectValuesProps> = ({
	array,
}) => {
	const { setArtifactsPage, dispatch } = useGetStateVariables();

	const selectChangeHandler = (
		e: SelectChangeEvent,
		stateFunc: (state: string) => AnyAction
	) => {
		dispatch(stateFunc(e.target.value));
		dispatch(setArtifactsPage(1));
	};

	return (
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
	);
};

export default ArtifactsFilterSelectValues;
