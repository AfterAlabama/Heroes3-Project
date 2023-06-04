import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { DeleteCookie } from '../../../helpers/Cookie/DeleteCookie';
import { CenteredFlex } from '../../../styles/Flex';
import NavbarAvatar from './NavbarAvatar';
import NavbarCaption from './NavbarCaption';
import NavbarButton from '../../Common/NavbarButton/NavbarButton';
import { CookieNames } from '../../../types/Enums/CookieNames';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const NavbarAuthContent = () => {
	const { changeAuth, dispatch } = useGetStateVariables();
	const navigate = useNavigate();

	const leaveButtonClickHandler = () => {
		dispatch(changeAuth(false));
		navigate(RouteNames.DEFAULT);
	};

	const deleteAccountButtonClickHandler = () => {
		dispatch(changeAuth(false));
		DeleteCookie(CookieNames.EMAIL);
		DeleteCookie(CookieNames.PASSWORD);
		DeleteCookie(CookieNames.NAME);
		DeleteCookie(CookieNames.ISLOGGED);
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
