import { FC } from 'react';
import { Hero } from '../../../heroes/Hero';
import HistoryMenuAccordion from './HistoryMenuAccordion';
import Box from '@mui/material/Box';

interface AccordionsProps {
	heroesArray: Hero[];
}

const HistoryMenuAccordions: FC<AccordionsProps> = ({ heroesArray }) => {
	const showAccordions = heroesArray.map((hero, index) => (
		<HistoryMenuAccordion
			key={index}
			hero={hero}
			panelNumber={`panel${index + 1}`}
			heroName={hero.name}
			heroSpec={hero.specialization}
			heroPic={hero.pic as unknown as string}
			heroDescription={hero.description}
		/>
	));

	return (
		<Box
			sx={{
				m: 4
			}}
		>
			{showAccordions}
		</Box>
	);
};

export default HistoryMenuAccordions;
