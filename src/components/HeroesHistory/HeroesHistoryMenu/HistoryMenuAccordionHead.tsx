import Box from '@mui/material/Box';
import { MenuAccordionSummary } from '../../../styles/Accordion';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import blue from '@mui/material/colors/blue';
import { HistoryMenuAccordionProps } from './HistoryMenuAccordion';
import { CastleHeroes } from '../../../heroes/Castle/CastleHeroes';
import { RampartHeroes } from '../../../heroes/Rampart/RampartHeroes';
import green from '@mui/material/colors/green';
import { TowerHeroes } from '../../../heroes/Tower/TowerHeroes';
import { InfernoHeroes } from '../../../heroes/Inferno/InfernoHeroes';
import red from '@mui/material/colors/red';
import { NecropolisHeroes } from '../../../heroes/Necropolis/NecropolisHeroes';
import grey from '@mui/material/colors/grey';
import { StrongholdHeroes } from '../../../heroes/Stronghold/StrongholdHeroes';
import brown from '@mui/material/colors/brown';
import { DungeonHeroes } from '../../../heroes/Dungeon/DungeonHeroes';
import { FortressHeroes } from '../../../heroes/Fortress/FortressHeroes';

const HistoryMenuAccordionHead: FC<HistoryMenuAccordionProps> = ({
	panelNumber,
	heroName,
	heroSpec,
	heroPic,
	hero,
}) => {
	const backgroundColorCondition =
		CastleHeroes.includes(hero) || TowerHeroes.includes(hero)
			? blue[400]
			: RampartHeroes.includes(hero)
			? green[400]
			: InfernoHeroes.includes(hero)
			? red[900]
			: NecropolisHeroes.includes(hero)
			? grey[900]
			: StrongholdHeroes.includes(hero)
			? brown[300]
			: DungeonHeroes.includes(hero)
			? brown[900]
			: FortressHeroes.includes(hero)
			? green[900]
			: 'orange';

	return (
		<MenuAccordionSummary
			aria-controls={`${panelNumber}d-content`}
			id={`${panelNumber}d-header`}
			hero={hero}
		>
			<Box
				sx={{
					width: 40,
					height: 40,
					backgroundColor: backgroundColorCondition,
					borderRadius: '5px',
					marginRight: 3,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<img
					alt='Hero Image'
					src={heroPic}
					style={{
						width: '90%',
						height: '90%',
					}}
				/>
			</Box>
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
