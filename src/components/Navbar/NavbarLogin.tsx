import { Avatar, Link, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { DeleteCookie } from '../../helpers/Cookie/DeleteCookie';
import { GetCookieValue } from '../../helpers/Cookie/GetCookieValues';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { MainSlice } from '../../store/Reducers/MainSlice';
import { RouteNames } from '../../types/Enums/RouteNames';

const NavbarLogin = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { changeAuth } = MainSlice.actions;

	const leaveClickHandler = () => {
		dispatch(changeAuth(false));
	};

	const deleteClickHandler = () => {
		dispatch(changeAuth(false));
		DeleteCookie('email');
		DeleteCookie('password');
		DeleteCookie('name');
	};

	const LoginCondition = isAuth ? (
		<>
			<Typography
				sx={{
					marginRight: 2,
					cursor: 'default',
				}}
			>
				Привет, {GetCookieValue('name')}
			</Typography>
			<Avatar
				alt='ProfilePic'
				src='../../assets/ProfilePic.png'
				sx={{
					marginLeft: 2,
					marginRight: 2,
				}}
			/>
			<Button
				sx={{
					marginLeft: 2,
					marginRight: 2,
				}}
				onClick={leaveClickHandler}
				color='inherit'
			>
				Выйти
			</Button>
			<Button
				onClick={deleteClickHandler}
				color='inherit'
				sx={{
					marginLeft: 2,
					marginRight: 2,
				}}
			>
				Удалить Аккаунт
			</Button>
		</>
	) : (
		<Button
			sx={{
				marginLeft: 2,
				marginRight: 2,
			}}
			color='inherit'
		>
			<Link
				href={RouteNames.AUTH_FORM}
				color='inherit'
				underline='none'
			>
				Войти
			</Link>
		</Button>
	);

	return <>{LoginCondition}</>;
};

export default NavbarLogin;
