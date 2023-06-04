import Pagination from '@mui/material/Pagination';
import { ChangeEvent } from 'react';
import { Artifact } from '../../../game/Artifacts/Artifact';
import IsLoading from '../../Common/IsLoading/IsLoading';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const ArtifactsPagination = ({ finalArray }: { finalArray: Artifact[] }) => {
	const { setArtifactsPage, dispatch, artifactsPage } = useGetStateVariables();
	
	const pageChangeHandler = (e: ChangeEvent<unknown>, value: number) => {
		dispatch(setArtifactsPage(value));
	};

	return (
		<IsLoading>
			<Pagination
				page={artifactsPage}
				onChange={pageChangeHandler}
				count={Math.ceil(finalArray.length / 20)}
				size='large'
				sx={{
					mb: 10,
				}}
			/>
		</IsLoading>
	);
};

export default ArtifactsPagination;
