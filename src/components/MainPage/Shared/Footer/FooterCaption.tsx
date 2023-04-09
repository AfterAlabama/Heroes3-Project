import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterCaption = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'left',
			}}
		>
			<Typography
				variant='h4'
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'left',
					mb: 3,
				}}
			>
				<AutoFixHighIcon
					sx={{
						mr: 1,
					}}
				/>{' '}
				Hero Progeny
			</Typography>
			<Typography>
				Hero Progeny - это путеводитель по старым играм, с
			</Typography>
			<Typography>
				которым провести сводобное время - одно удовольствие.
			</Typography>
		</Box>
	);
};

export default FooterCaption;
