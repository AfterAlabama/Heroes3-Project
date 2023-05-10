import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { MainSlice } from '../../store/Reducers/MainSlice';

const ArtifactsFilterOpeningButton = () => {
	const arrowRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const dispatch = useAppDispatch();
	const { isArtifactsFilterOpen } = useAppSelector(
		(state) => state.mainReducer
	);
	const { setArtifactsFilter } = MainSlice.actions;

	const mouseEnterHandler = () => {
		if (!isArtifactsFilterOpen) {
			gsap.to(arrowRef.current, {
				duration: 0.5,
				rotate: -90,
			});
		}
	};

	const mouseLeaveHandler = () => {
		if (!isArtifactsFilterOpen) {
			gsap.to(arrowRef.current, {
				duration: 0.5,
				rotate: 0,
			});
		}
	};

	const clickHandler = () => {
		if (!isArtifactsFilterOpen) {
			gsap.to(arrowRef.current, {
				duration: 0.7,
				rotate: 90,
				ease: 'back.out(1)',
			});
			dispatch(setArtifactsFilter(true));
		} else {
			gsap.to(arrowRef.current, {
				duration: 0.7,
				rotate: -90,
				ease: 'back.out(1)',
			});
			dispatch(setArtifactsFilter(false));
		}
	};

	return (
		<Button
			sx={{
				fontSize: 20,
				gap: 2,
			}}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			onClick={clickHandler}
		>
			Сортировать
			<Box ref={arrowRef}>
				<AiOutlineArrowLeft />
			</Box>
		</Button>
	);
};

export default ArtifactsFilterOpeningButton;
