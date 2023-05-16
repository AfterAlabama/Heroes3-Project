import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavbarMenu from './NavbarMenu';
import NavbarLogo from './NavbarLogo';
import NavbarContent from './NavbarContent';

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
					<NavbarContent />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
