import Typography from '@mui/material/Typography';
import { GetCookieValue } from '../../../helpers/Cookie/GetCookieValues';

const NavbarCaption = () => {
	return (
		<Typography
			sx={{
				cursor: 'default',
			}}
		>
			Привет, {GetCookieValue('name')}
		</Typography>
	);
};

export default NavbarCaption;
