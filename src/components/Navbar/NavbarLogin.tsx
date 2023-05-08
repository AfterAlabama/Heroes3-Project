import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { DeleteCookie } from '../../helpers/Cookie/DeleteCookie';
import { GetCookieValue } from '../../helpers/Cookie/GetCookieValues';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { MainSlice } from '../../store/Reducers/MainSlice';
import { RouteNames } from '../../types/Enums/RouteNames';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useRef } from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom';

const NavbarLogin = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { changeAuth } = MainSlice.actions;
	const picRef = useRef<SVGSVGElement>({} as SVGSVGElement);
	const navigate = useNavigate()

	const leaveButtonClickHandler = () => {
		dispatch(changeAuth(false));
		navigate(RouteNames.DEFAULT)
	};

	const deleteAccountButtonClickHandler = () => {
		dispatch(changeAuth(false));
		DeleteCookie('email');
		DeleteCookie('password');
		DeleteCookie('name');
		DeleteCookie('Login')
		navigate(RouteNames.DEFAULT)
	};

	const avatarMouseEnterHandler = () => {
		picRef.current.style.display = 'flex';
	};

	const avatarMouseLeaveHandler = () => {
		picRef.current.style.display = 'none';
	};

	const LoginCondition = isAuth ? (
		<>
			<Typography
				sx={{
					mr: 2,
					cursor: 'default',
				}}
			>
				Привет, {GetCookieValue('name')}
			</Typography>
			<Avatar
				alt='ProfilePic'
				onMouseEnter={avatarMouseEnterHandler}
				onMouseLeave={avatarMouseLeaveHandler}
				sx={{
					ml: 2,
					mr: 2,
					cursor: 'pointer',
					transition: 'all ease-in-out 0.4s',
					'&:hover': {
						transform: 'scale(1.3)',
						'&:before': {
							content: "''",
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							backgroundColor: 'rgba(0,0,0,0.6)',
						},
					},
				}}
			>
				<PermIdentityIcon />
				<AddAPhotoIcon
					ref={picRef}
					sx={{ display: 'none', zIndex: 2, position: 'absolute' }}
				/>
			</Avatar>
			<Button
				sx={{
					ml: 2,
					mr: 2,
					transition: 'all 0.5s ease',
					'&:hover': {
						p: 1,
						borderRadius: '15px',
						boxShadow: '10px 10px 10px rgba(0,0,0,0.5)'
					}
				}}
				onClick={leaveButtonClickHandler}
				color='inherit'
			>
				Выйти
			</Button>
			<Button
				onClick={deleteAccountButtonClickHandler}
				color='inherit'
				sx={{
					ml: 2,
					mr: 2,
					transition: 'all 0.5s ease',
					'&:hover': {
						p: 1,
						borderRadius: '15px',
						boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
					}
				}}
			>
				Удалить Аккаунт
			</Button>
		</>
	) : (
		<Button
			sx={{
				ml: 2,
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
