import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector } from '../../hooks/ReduxHooks';

const NavbarMenu = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);

	const DisabledCondition = isAuth ? false : true;

	return (
		<IconButton
			disabled={DisabledCondition}
			size='large'
			edge='start'
			color='inherit'
			aria-label='menu'
			sx={{ mr: 2 }}
		>
			<MenuIcon />
		</IconButton>
	);
};

export default NavbarMenu;
