import IsLoading from '../../Common/IsLoading/IsLoading';
import { useHeroComponentContext } from './HeroComponent';
import Typography from '@mui/material/Typography';
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck';
import { CenteredFlex } from '../../../styles/Flex';
import ResumeSectionHeader from '../../Common/ResumeSectionHeader/ResumeSectionHeader';

const HeroComponentSpecialties = () => {
	const { baseSpecialties } = useHeroComponentContext();

	return (
		<>
			<ResumeSectionHeader text='Навыки' />
			<>
				{baseSpecialties.map((spec, index) => (
					<IsLoading key={index}>
						<CenteredFlex
							sx={{
								justifyContent: 'flex-start',
							}}
						>
							<AiOutlineCheck size={20} color='#1976d2' />
							<Typography
								fontSize={20}
							>
								{spec}
							</Typography>
						</CenteredFlex>
					</IsLoading>
				))}
			</>
		</>
	);
};

export default HeroComponentSpecialties;
