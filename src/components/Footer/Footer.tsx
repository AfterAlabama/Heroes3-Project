import blue from '@mui/material/colors/blue';
import FooterCaption from './FooterCaption';
import FooterGrid from './FooterGrid';
import FooterRights from './FooterRights';
import Divider from '@mui/material/Divider';
import { CenteredFlex, ColumnedFlex } from '../../styles/Flex';

const Footer = () => {
	return (
		<ColumnedFlex
			component='footer'
			sx={{
				height: '40vh',
				backgroundColor: blue[800],
				alignItems: 'stretch',
				color: 'white',
				gap: 3,
			}}
		>
			<CenteredFlex
				sx={{
					justifyContent: 'space-around',
				}}
			>
				<FooterCaption />
				<FooterGrid />
			</CenteredFlex>
			<Divider
				sx={{
					backgroundColor: 'white',
					opacity: '0.2',
				}}
			/>
			<FooterRights />
		</ColumnedFlex>
	);
};

export default Footer;
