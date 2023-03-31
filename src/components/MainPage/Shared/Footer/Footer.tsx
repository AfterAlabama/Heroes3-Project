import Box from '@mui/material/Box';
import blue from '@mui/material/colors/blue';

const Footer = () => {
	return (
		<footer>
			<Box
				sx={{
					height: '10vh',
          cursor:'default',
					marginTop: '25vh',
					backgroundColor: blue[800],
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					fontSize: 20,
				}}
			>
				Hero progeny Inc. 2023
			</Box>
		</footer>
	);
};

export default Footer;
