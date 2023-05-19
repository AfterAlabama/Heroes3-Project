import SwipeableViews from 'react-swipeable-views-react-18-fix';
import HistoryMenuTabPanel from './HistoryMenuTabPanel';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { MainSlice } from '../../../../store/Reducers/MainSlice';
import useTheme from '@mui/material/styles/useTheme';
import { Alignments } from '../../../../types/Enums/Alignments';

const HistoryMenuTabPanels = () => {
	const { heroesMenuTabValue } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { changeHeroesMenuTabValue } = MainSlice.actions;
	const theme = useTheme();

	const handleChangeIndex = (index: number) => {
		dispatch(changeHeroesMenuTabValue(index));
	};

	const axisCondition = theme.direction === 'rtl' ? 'x-reverse' : 'x';

	return (
		<SwipeableViews
			axis={axisCondition}
			index={heroesMenuTabValue}
			onChangeIndex={handleChangeIndex}
		>
			{Object.values(Alignments).map((panel, index) => (
				<HistoryMenuTabPanel
					key={panel}
					value={heroesMenuTabValue}
					arrayIndex={index}
					dir={theme.direction}
				/>
			))}
		</SwipeableViews>
	);
};

export default HistoryMenuTabPanels;
