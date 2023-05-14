import Typography from '@mui/material/Typography';
import { CenteredFlex } from '../../styles/Flex';
import FooterIcons from './FooterIcons';

const FooterRights = () => {
	return (
		<CenteredFlex
			sx={{
				justifyContent: 'space-between',
				ml: 23,
				mr: 23,
			}}
		>
			<Typography color='white'>
				<>&copy;</> 2023 Hero Progeny. Все права сохранены.
			</Typography>
			<FooterIcons />
		</CenteredFlex>
	);
};

export default FooterRights;
