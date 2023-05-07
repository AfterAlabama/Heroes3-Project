import Typography from '@mui/material/Typography';
import HeroComponentSectionTitle from './HeroComponentSectionTitle';
import { useHeroComponentContext } from './HeroComponent';
import Box from '@mui/material/Box';

const HeroComponentMagic = () => {
	const { initialSpellPoints, initialSpells } = useHeroComponentContext();

	return (
		<>
			<HeroComponentSectionTitle text='Магия' />
			<Box
				sx={{
					ml: 5,
				}}
			>
				<Typography fontSize={20}>
					Изначальное количество магических очков:{' '}
					{!initialSpellPoints ? 'нету' : initialSpellPoints}
				</Typography>
				<Box fontSize={20}>
					Изначальное заклинание:{' '}
					{!initialSpells ? 'отсутствует' : initialSpells}
				</Box>
			</Box>
		</>
	);
};

export default HeroComponentMagic;