import Typography from '@mui/material/Typography';
import { useHeroComponentContext } from './HeroComponent';
import IsLoading from '../../Common/IsLoading/IsLoading';

const HeroComponentTitle = () => {
	const { name } = useHeroComponentContext();
	return (
		<IsLoading sx={{mt:-5}} >
			<Typography
				sx={(theme) => ({
					fontSize: 60,
					color: theme.palette.primary.main,
					cursor: 'default',
					mb: 5
				})}
			>
				{name} Резюме
			</Typography>
		</IsLoading>
	);
};

export default HeroComponentTitle;
