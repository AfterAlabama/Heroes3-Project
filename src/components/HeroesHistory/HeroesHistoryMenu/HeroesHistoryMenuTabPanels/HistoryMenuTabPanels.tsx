import SwipeableViews from 'react-swipeable-views-react-18-fix';
import HistoryMenuTabPanel from './HistoryMenuTabPanel';
import useTheme from '@mui/material/styles/useTheme';
import { Alignments } from '../../../../types/Enums/Alignments';
import { useGetStateVariables } from '../../../../hooks/useGetStateVariables';

const HistoryMenuTabPanels = () => {
	const { setHeroesMenuTabValue, dispatch, heroesMenuTabValue } = useGetStateVariables();
	const theme = useTheme();

	const handleChangeIndex = (index: number) => {
		dispatch(setHeroesMenuTabValue(index));
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
