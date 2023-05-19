import Box from '@mui/material/Box';
import HistoryMenuAccordion from './HistoryMenuAccordion';
import { heroesArray } from '../../../../heroes/HeroesArray';
import { useAppSelector } from '../../../../hooks/reduxHooks';

const HistoryMenuAccordions = ({ arrayIndex }: { arrayIndex: number }) => {
	const { heroesPage } = useAppSelector((state) => state.mainReducer);

	const getHeroesArray = (index: number) => {
		return heroesArray[index].slice(
			(heroesPage - 1) * 8,
			(heroesPage - 1) * 8 + 8
		);
	};

	return (
		<Box
			component='section'
			width='100%'
			ml={5}
			mt={5}
			mb={5}
		>
			{getHeroesArray(arrayIndex).map((hero, index) => (
				<HistoryMenuAccordion
					key={index}
					hero={hero}
					panelNumber={`panel${index + 1}`}
					heroName={hero.name}
					heroSpec={hero.specialization}
					heroPic={hero.pic}
					heroDescription={hero.description}
				/>
			))}
		</Box>
	);
};

export default HistoryMenuAccordions;
