import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { RouteNames } from '../../types/Enums/RouteNames';
import { useAppSelector } from '../../hooks/ReduxHooks';

const NavbarLogo = () => {
	const { isAuth } = useAppSelector(state => state.mainReducer)

	return (
		<Typography
			variant='h6'
			component='div'
			sx={{ flexGrow: 1, cursor: 'pointer' }}
			
		>
			<Link href={isAuth ? RouteNames.AUTHED_DEFAULT : RouteNames.DEFAULT} sx={{
				color:'white',
				textDecoration: 'none'
			}} >HeroProgeny</Link>
			
		</Typography>
	);
};

export default NavbarLogo;
