import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';
import NavbarLogin from './NavbarLogin';

const NavbarContent = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
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

export default NavbarContent;
