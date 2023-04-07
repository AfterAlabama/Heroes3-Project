import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import {
	MenuAccordion,
} from '../../../styles/Accordion';
import { FC } from 'react';
import HistoryMenuAccordionHead from './HistoryMenuAccordionHead';
import HistoryMenuAccordionContent from './HistoryMenuAccordionContent';
import { Hero } from '../../../heroes/Hero';

export interface HistoryMenuAccordionProps {
	panelNumber: string;
	heroName: string;
	heroSpec: string;
	heroPic: string;
	hero: Hero
}

const HistoryMenuAccordion: FC<HistoryMenuAccordionProps> = ({
	panelNumber,
	heroName,
	heroSpec,
	heroPic,
	hero
}) => {
	const dispatch = useAppDispatch();
	const { toggleAccordion } = MainSlice.actions;
	const { isAccordionExpended } = useAppSelector((state) => state.mainReducer);

	const mouseEnterHandler = () => {
		dispatch(toggleAccordion(panelNumber));
	};

	const mouseLeaveHandler = () => {
		dispatch(toggleAccordion(false));
	};

	const expandedCondition = isAccordionExpended === panelNumber;

	return (
		<MenuAccordion
			expanded={expandedCondition}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			hero={hero}
		>
			<HistoryMenuAccordionHead
				panelNumber={panelNumber}
				heroName={heroName}
				heroSpec={heroSpec}
				heroPic={heroPic}
				hero={hero}
			/>
			<HistoryMenuAccordionContent />
		</MenuAccordion>
	);
};

export default HistoryMenuAccordion;
