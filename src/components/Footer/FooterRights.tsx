import Typography from '@mui/material/Typography';
import { CenteredFlex } from '../../styles/Flex';
import FooterIcons from './FooterIcons';
import IsLoading from '../Common/IsLoading/IsLoading';

const FooterRights = () => {
	return (
		<CenteredFlex
			sx={{
				justifyContent: 'space-between',
				ml: 23,
				mr: 23,
			}}
		>
			<IsLoading>
				<Typography color='white'>
					<>&copy;</> 2023 Hero Progeny. Все права сохранены.
				</Typography>
			</IsLoading>
			<FooterIcons />
		</CenteredFlex>
	);
};

export default FooterRights;
