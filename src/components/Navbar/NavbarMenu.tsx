import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector } from '../../hooks/reduxHooks';

const NavbarMenu = () => {
  const { isAuth } = useAppSelector(state => state.mainReducer)
	return (
		<IconButton
			disabled = {isAuth ? false : true}
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
