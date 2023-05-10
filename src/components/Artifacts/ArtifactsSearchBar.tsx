import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { ChangeEvent } from 'react';
import { MainSlice } from '../../store/Reducers/MainSlice';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { useDebounce } from '../../hooks/useDebounce';

const ArtifactsSearchBar = () => {
	const { setArtifactsSearchQuery } = MainSlice.actions;
	const dispatch = useAppDispatch();

	const inputStateChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setArtifactsSearchQuery(e.target.value));
	};

  const inputHandler = useDebounce(inputStateChange)

	return (
		<Box mb={5}>
			<InputLabel>Искать по названию</InputLabel>
			<Input
				onChange={(e) => inputHandler(e as ChangeEvent<HTMLInputElement>)}
				placeholder='Крылья ангела...'
			/>
		</Box>
	);
};

export default ArtifactsSearchBar;
