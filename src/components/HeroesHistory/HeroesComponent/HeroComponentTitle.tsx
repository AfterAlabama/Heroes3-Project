import Typography from '@mui/material/Typography';
import { useHeroComponentContext } from './HeroComponent';
import IsLoading from '../../Common/IsLoading/IsLoading';

const HeroComponentTitle = () => {
	const { name } = useHeroComponentContext();
	return (
		<IsLoading sx={{mt:-5}} >
			<Typography
				variant='h1'
				sx={(theme) => ({
					fontSize: 60,
					color: theme.palette.primary.main,
				})}
			>
				{name} Резюме
			</Typography>
		</IsLoading>
	);
};

export default HeroComponentTitle;
