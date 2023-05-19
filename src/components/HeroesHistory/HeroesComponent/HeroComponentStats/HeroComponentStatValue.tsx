import Typography from '@mui/material/Typography';
import IsLoading from '../../../Common/IsLoading/IsLoading';

const HeroComponentStatValue = ({ value }: { value: number }) => {
	return (
		<IsLoading>
			<Typography
				sx={(theme) => ({
					color: theme.palette.primary.dark,
					fontSize: 40,
					mt: 1,
				})}
			>
				{value}
			</Typography>
		</IsLoading>
	);
};

export default HeroComponentStatValue;
