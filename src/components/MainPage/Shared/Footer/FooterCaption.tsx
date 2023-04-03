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
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'left',
					fontSize: 30,
					marginBottom: 3,
				}}
			>
				<AutoFixHighIcon
					sx={{
						marginRight: 1,
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
