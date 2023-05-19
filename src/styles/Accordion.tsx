import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import blue from '@mui/material/colors/blue';
import { styled } from '@mui/material/styles';
import ArrowDownwardSharp from '@mui/icons-material/ArrowDownwardSharp';
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Hero } from '../heroes/Hero';
import { CastleHeroes } from '../heroes/Castle/CastleHeroes';
import { TowerHeroes } from '../heroes/Tower/TowerHeroes';
import { RampartHeroes } from '../heroes/Rampart/RampartHeroes';
import { InfernoHeroes } from '../heroes/Inferno/InfernoHeroes';
import { NecropolisHeroes } from '../heroes/Necropolis/NecropolisHeroes';
import { StrongholdHeroes } from '../heroes/Stronghold/StrongholdHeroes';
import { FortressHeroes } from '../heroes/Fortress/FortressHeroes';
import { DungeonHeroes } from '../heroes/Dungeon/DungeonHeroes';

interface MenuAccordionProps extends AccordionProps {
	hero: Hero;
}

export const MenuAccordion = styled((props: MenuAccordionProps) => (
	<MuiAccordion
		elevation={24}
		disableGutters
		{...props}
	/>
))(({ theme, hero }) => ({
	border: `1px solid ${theme.palette.divider}`,
	width: '40%',
	cursor: 'pointer',
	'&:hover': {
		boxShadow: ` 0px 4px 18px 3px ${
			CastleHeroes.includes(hero) || TowerHeroes.includes(hero)
				? blue[800]
				: RampartHeroes.includes(hero)
				? theme.palette.success.light
				: InfernoHeroes.includes(hero)
				? theme.palette.error.main
				: NecropolisHeroes.includes(hero)
				? theme.palette.grey[800]
				: DungeonHeroes.includes(hero)
				? theme.palette.warning.dark
				: StrongholdHeroes.includes(hero)
				? theme.palette.warning.light
				: FortressHeroes.includes(hero)
				? theme.palette.success.main
				: 'orange'
		}`,
	},
	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

interface MenuAccordionSummaryProps extends AccordionSummaryProps {
	hero: Hero;
}

export const MenuAccordionSummary = styled(
	(props: MenuAccordionSummaryProps) => (
		<MuiAccordionSummary
			expandIcon={<ArrowDownwardSharp sx={{ fontSize: '1.2rem' }} />}
			{...props}
		/>
	)
)(({ theme, hero }) => ({
	backgroundColor:
		theme.palette.mode === 'dark'
			? 'rgba(255, 255, 255, .05)'
			: 'rgba(0, 0, 0, .03)',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(180deg)',
		color:
			CastleHeroes.includes(hero) || TowerHeroes.includes(hero)
				? theme.palette.primary.light
				: RampartHeroes.includes(hero)
				? theme.palette.success.light
				: InfernoHeroes.includes(hero)
				? theme.palette.error.main
				: NecropolisHeroes.includes(hero)
				? theme.palette.grey[800]
				: StrongholdHeroes.includes(hero)
				? theme.palette.warning.light
				: DungeonHeroes.includes(hero)
				? theme.palette.warning.dark
				: FortressHeroes.includes(hero)
				? theme.palette.success.main
				: 'orange',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

export const MenuAccordionDetails = styled(MuiAccordionDetails)(
	({ theme }) => ({
		padding: theme.spacing(2),
		borderTop: '1px solid rgba(0, 0, 0, .125)'
	})
);
