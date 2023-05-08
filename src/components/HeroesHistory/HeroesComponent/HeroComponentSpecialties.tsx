import Box from '@mui/material/Box';
import IsLoading from '../../Common/IsLoading/IsLoading';
import { useHeroComponentContext } from './HeroComponent';
import HeroComponentSectionTitle from './HeroComponentSectionTitle';
import Typography from '@mui/material/Typography';
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck';
import { CenteredFlex } from '../../../styles/CenteredFlex';

const HeroComponentSpecialties = () => {
	const { baseSpecialties } = useHeroComponentContext();

	return (
		<>
			<HeroComponentSectionTitle text='Навыки' />
			<Box ml={5} sx={{
				cursor: 'default'
			}} >
				{baseSpecialties.map((spec, index) => (
					<IsLoading key={index}>
						<CenteredFlex
							sx={{
								justifyContent: 'flex-start',
							}}
						>
							<Box
								sx={(theme) => ({
									color: theme.palette.primary.main,
								})}
							>
								<AiOutlineCheck size={20} />
							</Box>
							<Typography
								fontSize={20}
								ml={0.5}
							>
								{spec}
							</Typography>
						</CenteredFlex>
					</IsLoading>
				))}
			</Box>
		</>
	);
};

export default HeroComponentSpecialties;
