import {KeyboardEvent, MouseEvent} from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector } from '../../hooks/ReduxHooks';

const NavbarMenuIcon = ({
	toggleDrawer,
}: {
	toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}) => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);

	return (
		<IconButton
			disabled={isAuth ? false : true}
			size='large'
			edge='start'
			color='inherit'
			aria-label='menu'
			sx={{ mr: 2 }}
			onClick={toggleDrawer(true)}
		>
			<MenuIcon />
		</IconButton>
	);
};

export default NavbarMenuIcon;
