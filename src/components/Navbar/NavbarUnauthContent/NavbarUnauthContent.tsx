import { Link as ReactRouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { RouteNames } from '../../../types/Enums/RouteNames';

const NavbarUnauthContent = () => {
	return (
		<>
			<Link
				component={ReactRouterLink}
				to={RouteNames.AUTH_FORM}
				sx={{
					color: 'white',
					textDecoration: 'none',
					fontSize: 20,
					mr: 5,
					borderRadius: '15px',
					transition: 'all 0.5s ease',
					'&:hover': {
						p: 1,
						boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
					},
				}}
			>
				Войти
			</Link>
		</>
	);
};

export default NavbarUnauthContent;
