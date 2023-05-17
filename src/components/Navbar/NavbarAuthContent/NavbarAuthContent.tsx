import { useAppDispatch } from '../../../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { DeleteCookie } from '../../../helpers/Cookie/DeleteCookie';
import { CenteredFlex } from '../../../styles/Flex';
import NavbarAvatar from './NavbarAvatar';
import NavbarCaption from './NavbarCaption';
import NavbarButton from '../../Common/NavbarButton/NavbarButton';

const NavbarAuthContent = () => {
	const dispatch = useAppDispatch();
	const { changeAuth } = MainSlice.actions;
	const navigate = useNavigate();

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
		<CenteredFlex>
			<NavbarCaption />
			<NavbarAvatar />
			<NavbarButton
				buttonClickHandler={leaveButtonClickHandler}
				buttonContent={'Выйти'}
			/>
			<NavbarButton
				buttonClickHandler={deleteAccountButtonClickHandler}
				buttonContent={'Удалить Аккаунт'}
			/>
		</CenteredFlex>
	);
};

export default NavbarAuthContent;
