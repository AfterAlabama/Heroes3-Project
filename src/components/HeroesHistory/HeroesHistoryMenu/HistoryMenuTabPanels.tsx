import SwipeableViews from 'react-swipeable-views-react-18-fix';
import HistoryMenuTabPanel from './HistoryMenuTabPanel';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import useTheme from '@mui/material/styles/useTheme';
import { AlignmentPics, Alignments } from '../../../types/Enums/Alignments';
import Box from '@mui/material/Box';
import HistoryMenuAccordions from './HistoryMenuAccordions';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import BlackOverlay from '../../Common/BlackOverlay/BlackOverlay';
import { heroesArray } from '../../../heroes/HeroesArray';

const HistoryMenuTabPanels = () => {
	const { heroesMenuTabValue } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { changeHeroesMenuTabValue } = MainSlice.actions;
	const theme = useTheme();

	const handleChangeIndex = (index: number) => {
		dispatch(changeHeroesMenuTabValue(index));
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
					overflow: 'hidden'
				}}
			>
				<BlackOverlay />
				<BackgroundImage
					alt='Alignment city'
					src={AlignmentPics[index]}
					borderRadius='30px'
					height ='125vh'
				/>
				<HistoryMenuAccordions heroesArray={heroesArray[index]} />
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
