import { CastleHeroes } from '../../../heroes/Castle/CastleHeroes';
import HistoryMenuAccordion from './HistoryMenuAccordion';

const HistoryMenuAccordions = () => {
	return (
		<>
			{CastleHeroes.map((hero, index) => (
				<HistoryMenuAccordion
					key={index}
					panelNumber={`panel${index + 1}`}
					hero={hero.name}
				/>
			))}
		</>
	);
};

export default HistoryMenuAccordions;
