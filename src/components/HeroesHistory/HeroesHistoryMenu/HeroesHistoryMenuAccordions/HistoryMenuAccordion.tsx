import { MenuAccordion } from '../../../../styles/Accordion';
import { FC } from 'react';
import HistoryMenuAccordionHead from './HistoryMenuAccordionHead';
import { Hero } from '../../../../game/Heroes/Hero';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../../types/Enums/RouteNames';
import HistoryMenuAccordionContent from './HistoryMenuAccordionContent';
import { useGetStateVariables } from '../../../../hooks/useGetStateVariables';

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
	const { isAccordionExpended, setAccordion, dispatch } =
		useGetStateVariables();
	const navigate = useNavigate();

	const accordionMouseClickHandler = (name: string) => {
		navigate(`${RouteNames.HEROES_HISTORY}/${name}`);
		window.scrollTo(0, 0);
	};

	const accordionMouseEnterHandler = () => {
		dispatch(setAccordion(panelNumber));
	};

	const accordionMouseLeaveHandler = () => {
		dispatch(setAccordion(false));
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
