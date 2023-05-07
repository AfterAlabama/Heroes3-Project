import Typography from '@mui/material/Typography';
import { useHeroComponentContext } from './HeroComponent';

const HeroComponentTitle = () => {
	const { name } = useHeroComponentContext();
	return (
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
	);
};

export default HeroComponentTitle;
