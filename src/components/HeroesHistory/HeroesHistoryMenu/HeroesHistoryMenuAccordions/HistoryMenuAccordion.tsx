import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { MainSlice } from '../../../../store/Reducers/MainSlice';
import { MenuAccordion } from '../../../../styles/Accordion';
import { FC } from 'react';
import HistoryMenuAccordionHead from './HistoryMenuAccordionHead';
import { Hero } from '../../../../heroes/Hero';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../../types/Enums/RouteNames';
import HistoryMenuAccordionContent from './HistoryMenuAccordionContent';

interface HistoryMenuAccordionProps {
	panelNumber: string;
	heroName: string;
	heroSpec: string;
	heroPic: string;
	hero: Hero;
	heroDescription: string;
}

const HistoryMenuAccordion: FC<HistoryMenuAccordionProps> = ({
	panelNumber,
	heroName,
	heroSpec,
	heroPic,
	hero,
	heroDescription,
}) => {
	const dispatch = useAppDispatch();
	const { toggleAccordion } = MainSlice.actions;
	const { isAccordionExpended } = useAppSelector((state) => state.mainReducer);
	const navigate = useNavigate();

	const accordionMouseClickHandler = (name: string) => {
		navigate(`${RouteNames.HEROES_HISTORY}/${name}`);
		window.scrollTo(0, 0);
	};

	const accordionMouseEnterHandler = () => {
		dispatch(toggleAccordion(panelNumber));
	};

	const accordionMouseLeaveHandler = () => {
		dispatch(toggleAccordion(false));
	};

	const accordionExpandedCondition = isAccordionExpended === panelNumber;

	return (
		<MenuAccordion
			expanded={accordionExpandedCondition}
			onMouseEnter={accordionMouseEnterHandler}
			onMouseLeave={accordionMouseLeaveHandler}
			hero={hero}
			onClick={() => accordionMouseClickHandler(hero.name)}
		>
			<HistoryMenuAccordionHead
				panelNumber={panelNumber}
				heroName={heroName}
				heroSpec={heroSpec}
				heroPic={heroPic}
				hero={hero}
			/>
			<HistoryMenuAccordionContent heroDescription={heroDescription} />
		</MenuAccordion>
	);
};

export default HistoryMenuAccordion;
