import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavbarLogin from './NavbarLogin';
import NavbarMenu from './NavbarMenu';
import NavbarLogo from './NavbarLogo';

const Navbar = () => {
	return (
		<Box
			component='nav'
			sx={{ flexGrow: 1 }}
		>
			<AppBar position='static'>
				<Toolbar>
					<NavbarMenu />
					<NavbarLogo />
					<NavbarLogin />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
