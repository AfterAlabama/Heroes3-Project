import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft';
import { gsap } from 'gsap';
import { FC, MutableRefObject, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { MainSlice } from '../../store/Reducers/MainSlice';

interface OpeningButtonsProps {
	filtersRef: MutableRefObject<HTMLDivElement>;
}

const ArtifactsFilterOpeningButton: FC<OpeningButtonsProps> = ({ filtersRef }) => {
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

			gsap.to(filtersRef.current, {
				duration: 0.5,
				height: '20px',
			});
		}
	};

	const mouseLeaveHandler = () => {
		if (!isArtifactsFilterOpen) {
			gsap.to(arrowRef.current, {
				duration: 0.5,
				rotate: 0,
			});

			gsap.to(filtersRef.current, {
				duration: 0.5,
				height: '0px'
			});
		}
	};

	const clickHandler = () => {
		if (!isArtifactsFilterOpen) {
			gsap.to(arrowRef.current, {
				duration: 0.5,
				rotate: 90,
				ease: 'back.out(1)',
			});

			gsap.to(filtersRef.current, {
				duration: 0.7,
				height: '200px',
			})

			
			dispatch(setArtifactsFilter(true));
		} else {
			gsap.to(arrowRef.current, {
				duration: 0.5,
				rotate: -90,
				ease: 'back.out(1)',
			});

			gsap.to(filtersRef.current, {
				duration: 0.7,
				height: '0px',
				ease: 'power2'
			})

		

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
