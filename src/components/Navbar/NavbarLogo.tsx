import Typography from '@mui/material/Typography';
import { RouteNames } from '../../types/Enums/RouteNames';
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
	return (
		<Typography
			variant='h6'
			component='div'
			sx={{ flexGrow: 1, cursor: 'pointer' }}
			
		>
			<Link to={RouteNames.DEFAULT} style={{
				color:'white',
				textDecoration: 'none'
			}} >HeroProgeny</Link>
		</Typography>
	);
};

export default NavbarLogo;
