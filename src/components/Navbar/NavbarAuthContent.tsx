import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GetCookieValue } from '../../helpers/Cookie/GetCookieValues';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useRef } from 'react';
import { useAppDispatch } from '../../hooks/ReduxHooks';
import { useNavigate } from 'react-router-dom';
import { MainSlice } from '../../store/Reducers/MainSlice';
import { RouteNames } from '../../types/Enums/RouteNames';
import { DeleteCookie } from '../../helpers/Cookie/DeleteCookie';

const NavbarAuthContent = () => {
	const picRef = useRef<SVGSVGElement>({} as SVGSVGElement);
	const dispatch = useAppDispatch();
	const { changeAuth } = MainSlice.actions;
	const navigate = useNavigate();

	const avatarMouseEnterHandler = () => {
		picRef.current.style.display = 'flex';
	};

	const avatarMouseLeaveHandler = () => {
		picRef.current.style.display = 'none';
	};

	const leaveButtonClickHandler = () => {
		dispatch(changeAuth(false));
		navigate(RouteNames.DEFAULT);
	};

	const deleteAccountButtonClickHandler = () => {
		dispatch(changeAuth(false));
		DeleteCookie('email');
		DeleteCookie('password');
		DeleteCookie('name');
		DeleteCookie('Login');
		navigate(RouteNames.DEFAULT);
	};

	return (
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
						boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
					},
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
					},
				}}
			>
				Удалить Аккаунт
			</Button>
		</>
	);
};

export default NavbarAuthContent;
