import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { ArtifactArray } from '../../artifacts/ArtifactArray';
import { ChangeEvent, useRef, useState } from 'react';
import ArtifactsBlock from './ArtifactsBlock';
import Pagination from '@mui/material/Pagination';
import { CenteredFlex } from '../../styles/CenteredFlex';
import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft';
import { gsap } from 'gsap';

const ArtifactsComponent = () => {
	const [page, setPage] = useState(1);
	const arrowRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const [filtersOpened, setFiltersOpened] = useState(false);

	const pageChangeHandler = (e: ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const totalLength = ArtifactArray.reduce(
		(accum, array) => accum + array.length,
		0
	);

	const mouseOverHandler = () => {
		gsap.to(arrowRef.current, {
			rotate: !filtersOpened ? -90 : 90,
			duration: 0.5,
		});
	};

	const mouseOutHandler = () => {
		gsap.to(arrowRef.current, {
			rotate: !filtersOpened ? 0 : 90,
			duration: 0.5,
		});
	};

	const clickHandler = () => {
		setFiltersOpened((prev) => !prev);
		gsap.to(arrowRef.current, {
			rotate: 90,
			duration: 1,
		});
	};

	const getArtifacts = () => {
		return ArtifactArray.flat()
			.slice((page - 1) * 20, (page - 1) * 20 + 20)
			.map((artifact, index) => (
				<ArtifactsBlock
					key={index}
					src={artifact.pic}
					name={artifact.name}
				/>
			));
	};

	return (
		<Box
			mr={30}
			ml={30}
		>
			<Box
				mt={10}
				mb={10}
				sx={{
					cursor: 'default',
				}}
			>
				<Typography
					variant='h3'
					sx={(theme) => ({
						color: theme.palette.primary.main,
						mb: 2,
					})}
				>
					Артефакты
				</Typography>
				<Divider />
			</Box>
			<CenteredFlex
				sx={{
					flexDirection: 'column',
					gap: 2,
				}}
				mb={10}
			>
				<Button
					sx={{
						fontSize: 20,
						gap: 2,
					}}
					onMouseEnter={mouseOverHandler}
					onMouseLeave={mouseOutHandler}
					onClick={clickHandler}
				>
					Сортировать
					<Box ref={arrowRef}>
						<AiOutlineArrowLeft />
					</Box>
				</Button>
				<Box
					sx={(theme) => ({
						width: '500px',
						height: '200px',
						borderBottom: `1px solid ${theme.palette.primary.main}`,
						borderTop: `1px solid ${theme.palette.primary.main}`,
					})}
				></Box>
			</CenteredFlex>
			<Box mb={5}>
				<InputLabel>Искать по названию</InputLabel>
				<Input placeholder='Крылья ангела...' />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 5,
				}}
			>
				{getArtifacts()}
			</Box>
			<Pagination
				page={page}
				onChange={pageChangeHandler}
				count={Math.ceil(totalLength / 20)}
			/>
		</Box>
	);
};

export default ArtifactsComponent;
