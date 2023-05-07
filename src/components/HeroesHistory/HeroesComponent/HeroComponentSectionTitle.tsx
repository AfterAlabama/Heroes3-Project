import Typography from '@mui/material/Typography';
import IsLoading from '../../Common/IsLoading/IsLoading';

const HeroComponentSectionTitle = ({ text }: { text: string }) => {
	return (
		<IsLoading sx={{ml:5}} >
			<Typography
				sx={(theme) => ({
					borderBottom: `solid 10px ${theme.palette.primary.main}`,
					fontSize: 40,
					borderRadius: '0 0 0 20px',
					m: '40px 0 40px 40px',
					cursor: 'default',
				})}
			>
				{text}
			</Typography>
		</IsLoading>
	);
};

export default HeroComponentSectionTitle;
