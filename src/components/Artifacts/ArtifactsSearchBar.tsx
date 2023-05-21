import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { ChangeEvent } from 'react';
import { MainSlice } from '../../store/Reducers/MainSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useDebounce } from '../../hooks/useDebounce';
import IsLoading from '../Common/IsLoading/IsLoading';

const ArtifactsSearchBar = () => {
	const { setArtifactsSearchQuery } = MainSlice.actions;
	const dispatch = useAppDispatch();

	const inputStateChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setArtifactsSearchQuery(e.target.value));
	};

	const inputHandler = useDebounce(inputStateChange);

	return (
		<Box
			mb={10}
			component='article'
		>
			<IsLoading>
				<InputLabel
					sx={{
						fontSize: 22,
						mb: 2,
					}}
				>
					Искать по названию
				</InputLabel>
			</IsLoading>
			<IsLoading>
				<Input
					onChange={(e) => inputHandler(e as ChangeEvent<HTMLInputElement>)}
					placeholder='Артефакт...'
				/>
			</IsLoading>
		</Box>
	);
};

export default ArtifactsSearchBar;
