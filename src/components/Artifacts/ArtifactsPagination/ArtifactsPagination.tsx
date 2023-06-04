import Pagination from '@mui/material/Pagination';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { Artifact } from '../../../game/Artifacts/Artifact';
import IsLoading from '../../Common/IsLoading/IsLoading';

const ArtifactsPagination = ({ finalArray }: { finalArray: Artifact[] }) => {
	const { artifactsPage } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { setArtifactsPage } = MainSlice.actions;
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
