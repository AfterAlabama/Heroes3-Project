import Typography from '@mui/material/Typography';

const HeroComponentSectionTitle = ({ text }: { text: string }) => {
	return (
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
	);
};

export default HeroComponentSectionTitle;
