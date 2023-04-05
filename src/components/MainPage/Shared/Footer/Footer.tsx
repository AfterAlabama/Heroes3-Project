import Box from '@mui/material/Box';
import blue from '@mui/material/colors/blue';
import FooterCaption from './FooterCaption';
import FooterGrid from './FooterGrid';
import FooterRights from './FooterRights';
import Divider from '@mui/material/Divider';

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
				<Divider sx={{
					backgroundColor: 'white',
					opacity: '0.2',
					marginTop: 3,
					marginBottom: 3,
				}} />
				<FooterRights />
			</Box>
		</footer>
	);
};

export default Footer;
