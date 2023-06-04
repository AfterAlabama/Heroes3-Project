import Box from '@mui/material/Box';
import { MenuAccordionSummary } from '../../../../styles/Accordion';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Hero } from '../../../../game/Heroes/Hero';

interface HistorymenuAccordionHeadprops {
	panelNumber: string;
	heroName: string;
	heroSpec: string;
	heroPic: string;
	hero: Hero;
}

const HistoryMenuAccordionHead: FC<HistorymenuAccordionHeadprops> = ({
	panelNumber,
	heroName,
	heroSpec,
	heroPic,
	hero,
}) => {
	return (
		<MenuAccordionSummary
			aria-controls={`${panelNumber}d-content`}
			hero={hero}
		>
			<Box
				component='img'
				alt='Hero Image'
				src={heroPic}
				sx={{
					width: 40,
					height: 40,
					borderRadius: '5px',
					mr: 3,
				}}
			/>
			<Box>
				<Typography>{heroName}</Typography>
				<Typography
					sx={{
						fontSize: 12,
					}}
				>
					{heroSpec}
				</Typography>
			</Box>
		</MenuAccordionSummary>
	);
};

export default HistoryMenuAccordionHead;
