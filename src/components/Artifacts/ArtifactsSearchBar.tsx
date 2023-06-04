import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { ChangeEvent } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import IsLoading from '../Common/IsLoading/IsLoading';
import { useGetStateVariables } from '../../hooks/useGetStateVariables';

const ArtifactsSearchBar = () => {
	const { dispatch, setArtifactsSearchQuery  } = useGetStateVariables()

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
					onChange={inputHandler}
					placeholder='Артефакт...'
				/>
			</IsLoading>
		</Box>
	);
};

export default ArtifactsSearchBar;
