import SwipeableViews from 'react-swipeable-views-react-18-fix';
import HistoryMenuTabPanel from './HistoryMenuTabPanel';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import useTheme from '@mui/material/styles/useTheme';
import { AlignmentPics, Alignments } from '../../../types/Enums/Alignments';
import Box from '@mui/material/Box';
import HistoryMenuAccordions from './HistoryMenuAccordions';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import BlackOverlay from '../../Common/BlackOverlay/BlackOverlay';
import { heroesArray } from '../../../heroes/HeroesArray';
import Pagination from '@mui/material/Pagination';
import { ChangeEvent } from 'react';

const HistoryMenuTabPanels = () => {
	const { heroesMenuTabValue, heroesPage } = useAppSelector(
		(state) => state.mainReducer
	);
	const dispatch = useAppDispatch();
	const { changeHeroesMenuTabValue, setHeroesPage } = MainSlice.actions;
	const theme = useTheme();

	const handleChangeIndex = (index: number) => {
		dispatch(changeHeroesMenuTabValue(index));
	};

	const pageChangeHandler = (event: ChangeEvent<unknown>, value: number) => {
		dispatch(setHeroesPage(value));
	};

	const getHeroesArray = (index: number) => {
		return heroesArray[index].slice(
			(heroesPage - 1) * 8,
			(heroesPage - 1) * 8 + 8
		);
	};

	const menuPanelsArray = Object.values(Alignments).map((panel, index) => (
		<HistoryMenuTabPanel
			key={panel}
			value={heroesMenuTabValue}
			index={index}
			dir={theme.direction}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<BlackOverlay />
				<BackgroundImage
					alt='Alignment city'
					src={AlignmentPics[index]}
					borderRadius='30px'
					height='80vh'
				/>
				<HistoryMenuAccordions heroesArray={getHeroesArray(index)} />
				<Pagination
					count={Math.ceil(heroesArray[index].length / 8)}
					size='large'
					color='primary'
					page={heroesPage}
					onChange={pageChangeHandler}
					sx={{
						color: 'white',
						backgroundColor: 'rgba(255, 255, 255, 0.8)',
						width: '20%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 1,
						p: 2,
						borderRadius: '50%',
						mb: 5,
						ml: 25,
					}}
				/>
			</Box>
		</HistoryMenuTabPanel>
	));

	const axisCondition = theme.direction === 'rtl' ? 'x-reverse' : 'x';

	return (
		<SwipeableViews
			axis={axisCondition}
			index={heroesMenuTabValue}
			onChangeIndex={handleChangeIndex}
		>
			{menuPanelsArray}
		</SwipeableViews>
	);
};

export default HistoryMenuTabPanels;
