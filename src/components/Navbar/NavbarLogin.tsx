import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { DeleteCookie } from '../../helpers/Cookie/DeleteCookie';
import { GetCookieValue } from '../../helpers/Cookie/GetCookieValues';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { MainSlice } from '../../store/Reducers/MainSlice';
import { RouteNames } from '../../types/Enums/RouteNames';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useRef } from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const NavbarLogin = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { changeAuth } = MainSlice.actions;
	const picRef = useRef<SVGSVGElement>({} as SVGSVGElement);

	const leaveClickHandler = () => {
		dispatch(changeAuth(false));
	};

	const deleteClickHandler = () => {
		dispatch(changeAuth(false));
		DeleteCookie('email');
		DeleteCookie('password');
		DeleteCookie('name');
	};

	const enterHandler = () => {
		picRef.current.style.display = 'flex';
	};

	const leaveHandler = () => {
		picRef.current.style.display = 'none';
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
				onMouseEnter={enterHandler}
				onMouseLeave={leaveHandler}
				sx={{
					marginLeft: 2,
					marginRight: 2,
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
				<PermIdentityIcon />{' '}
				<AddAPhotoIcon
					ref={picRef}
					sx={{ display: 'none', zIndex: 2, position: 'absolute' }}
				/>
			</Avatar>
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
