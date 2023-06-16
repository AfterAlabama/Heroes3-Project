import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft';
import { FC, MutableRefObject, useRef } from 'react';
import IsLoading from '../../Common/IsLoading/IsLoading';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';
import { FilterButtonMouseEnterHandler } from './Logic/FilterButtonMouseEnterHandler';
import { FilterButtonMouseLeaveHandler } from './Logic/FilterButtonMouseLeaveHandler';
import { FilterButtonMouseClickHandler } from './Logic/FilterButtonMouseClickHandler';

interface OpeningButtonsProps {
	filtersRef: MutableRefObject<HTMLDivElement>;
}

const ArtifactsFilterOpeningButton: FC<OpeningButtonsProps> = ({
	filtersRef,
}) => {
	const arrowRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const { setArtifactsFilter, isArtifactsFilterOpen, dispatch } =
		useGetStateVariables();

	return (
		<IsLoading>
			<Button
				sx={{
					fontSize: 20,
					gap: 2,
				}}
				onMouseEnter={() =>
					FilterButtonMouseEnterHandler(
						isArtifactsFilterOpen,
						arrowRef,
						filtersRef
					)
				}
				onMouseLeave={() =>
					FilterButtonMouseLeaveHandler(
						isArtifactsFilterOpen,
						arrowRef,
						filtersRef
					)
				}
				onClick={() =>
					FilterButtonMouseClickHandler(
						isArtifactsFilterOpen,
						setArtifactsFilter,
						dispatch,
						arrowRef,
						filtersRef
					)
				}
			>
				Сортировать
				<Box ref={arrowRef}>
					<AiOutlineArrowLeft />
				</Box>
			</Button>
		</IsLoading>
	);
};

export default ArtifactsFilterOpeningButton;
