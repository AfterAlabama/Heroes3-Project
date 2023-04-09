import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { RouteNames } from '../../types/Enums/RouteNames';
import { useAppSelector } from '../../hooks/ReduxHooks';

const NavbarLogo = () => {
	const { isAuth } = useAppSelector(state => state.mainReducer)

	const hrefCondition = isAuth ? RouteNames.AUTHED_DEFAULT : RouteNames.DEFAULT;

	return (
		<Typography
			variant='h6'
			component='div'
			sx={{ flexGrow: 1, cursor: 'pointer' }}
			
		>
			<Link href={hrefCondition} sx={{
				color:'white',
				textDecoration: 'none'
			}} >HeroProgeny</Link>
		</Typography>
	);
};

export default NavbarLogo;
