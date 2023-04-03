import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import blue from '@mui/material/colors/blue';
import FooterCaption from './FooterCaption';
import FooterGrid from './FooterGrid';

const Footer = () => {
	return (
		<footer>
			<Box
				sx={{
					height: '40vh',
					cursor: 'default',
					marginTop: '25vh',
					backgroundColor: blue[800],
					display: 'flex',
					alignItems: 'space-around',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around',
						color: 'white',
					}}
				>
					<FooterCaption />
					<FooterGrid />
				</Box>
				<Box>
					<Typography sx={{
						color: 'white',
					}} >
						  <>&copy;</> 2023 Hero Progeny Все права сохранены ...
					</Typography>
				</Box>
			</Box>
		</footer>
	);
};

export default Footer;
