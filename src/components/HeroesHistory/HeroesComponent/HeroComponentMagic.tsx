import Typography from '@mui/material/Typography';
import HeroComponentSectionTitle from './HeroComponentSectionTitle';
import { useHeroComponentContext } from './HeroComponent';
import Box from '@mui/material/Box';
import IsLoading from '../../Common/IsLoading/IsLoading';

const HeroComponentMagic = () => {
	const { initialSpellPoints, initialSpells } = useHeroComponentContext();

	return (
		<>
			<HeroComponentSectionTitle text='Магия' />
			<Box
				sx={{
					ml: 5,
					cursor: 'default',
				}}
			>
				<IsLoading>
					<Typography fontSize={20}>
						Изначальное количество магических очков:{' '}
						{!initialSpellPoints ? 'нету' : initialSpellPoints}
					</Typography>
				</IsLoading>
				<IsLoading>
					<Typography
						display={'flex'}
						fontSize={20}
					>
						Изначальное заклинание:
						{!initialSpells ? (
							<Typography
								fontSize={20}
								pl={1}
								color='grey'
							>
								отсутствует
							</Typography>
						) : (
							initialSpells
						)}
					</Typography>
				</IsLoading>
			</Box>
		</>
	);
};

export default HeroComponentMagic;
