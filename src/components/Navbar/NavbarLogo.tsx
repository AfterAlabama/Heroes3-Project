import Typography from '@mui/material/Typography';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import { RouteNames } from '../../types/Enums/RouteNames';

const NavbarLogo = () => {
	const location = useLocation();

	const navbarLinkCondition = () => {
		if (location.pathname !== RouteNames.DEFAULT) {
			return (
				<Link
					component={ReactRouterLink}
					to={RouteNames.DEFAULT}
					sx={{
						color: 'white',
						textDecoration: 'none',
						cursor: 'pointer',
						transition: 'all 0.5s ease',
						'&:hover': {
							p: 1,
							borderRadius: '15px',
							boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
						},
					}}
				>
					HeroProgeny
				</Link>
			);
		}

		return (
			<Link
				component={ReactRouterLink}
				to={''}
				sx={(theme) => ({
					color: theme.palette.grey[400],
					textDecoration: 'none',
					cursor: 'default',
				})}
			>
				HeroProgeny
			</Link>
		);
	};

	return (
		<Typography
			variant='h6'
			component='div'
			sx={{
				flexGrow: 1,
			}}
		>
			{navbarLinkCondition()}
		</Typography>
	);
};

export default NavbarLogo;
