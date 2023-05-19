import Typography from '@mui/material/Typography';
import { useHeroComponentContext } from './HeroComponent';
import IsLoading from '../../Common/IsLoading/IsLoading';
import ResumeSectionHeader from '../../Common/ResumeSectionHeader/ResumeSectionHeader';

const HeroComponentMagic = () => {
	const { initialSpellPoints, initialSpells } = useHeroComponentContext();

	return (
		<>
			<ResumeSectionHeader text='Магия' />
			<>
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
						Изначальное заклинание:{' '}
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
			</>
		</>
	);
};

export default HeroComponentMagic;
