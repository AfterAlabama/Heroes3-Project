import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import { useAppSelector } from '../../hooks/reduxHooks';

const NavbarLogin = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);

	const LoginCondition = isAuth ? (
		<>
			<Avatar
				alt='ProfilePic'
				src='../../assets/ProfilePic.png'
			/>
			<Button color='inherit'>Выйти</Button>
		</>
	) : (
		<Button color='inherit'>Войти</Button>
	);

	return <>{LoginCondition}</>;
};

export default NavbarLogin;
