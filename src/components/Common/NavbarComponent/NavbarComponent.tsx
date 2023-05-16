import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { SxProps, Theme } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { GetSxProp } from '../../../helpers/GetSxProp/GetSxProp';

interface NavbarProps {
	children: ReactNode;
	navbarSxProp?: SxProps<Theme>;
}

//creates a customizable navbar
const NavbarComponent: FC<NavbarProps> = ({ children, navbarSxProp = [] }) => {
	return (
		<Box component='nav'>
			<AppBar position='static'>
				<Toolbar sx={GetSxProp(navbarSxProp)}>{children}</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavbarComponent;
