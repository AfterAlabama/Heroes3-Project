import SwipeableViews from 'react-swipeable-views-react-18-fix';
import HistoryMenuTabPanel from './HistoryMenuTabPanel';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import useTheme from '@mui/material/styles/useTheme';
import { Alignments } from '../../../types/Enums/Alignments';
import Box from '@mui/material/Box';

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
			key={index}
			value={heroesMenuTabValue}
			index={index}
			dir={theme.direction}
		>
			<Box sx={{
				display: 'flex',
				flexDirection: 'column'
			}}>
				{panel}
			</Box>
		</HistoryMenuTabPanel>
	));

	return (
		<SwipeableViews
			axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
			index={heroesMenuTabValue}
			onChangeIndex={handleChangeIndex}
		>
			{menuPanelsArray}
		</SwipeableViews>
	);
};

export default HistoryMenuTabPanels;
