import { Avatar, Link } from '@mui/material';
import Button from '@mui/material/Button';
import { useAppSelector } from '../../hooks/reduxHooks';
import { RouteNames } from '../../types/Enums/RouteNames';

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
		<Button color='inherit'>
			<Link href={RouteNames.AUTH_FORM} color='inherit' underline='none' >Войти</Link>
		</Button>
	);

	return <>{LoginCondition}</>;
};

export default NavbarLogin;
