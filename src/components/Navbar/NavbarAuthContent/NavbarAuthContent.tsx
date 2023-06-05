import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { DeleteCookie } from '../../../helpers/Cookie/DeleteCookie';
import { CenteredFlex } from '../../../styles/Flex';
import NavbarAvatar from './NavbarAvatar';
import NavbarCaption from './NavbarCaption';
import NavbarButton from '../../Common/NavbarButton/NavbarButton';
import { CookieNames } from '../../../types/Enums/CookieNames';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';
import { deleteObject, list, ref } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';

const NavbarAuthContent = () => {
	const { setAuth, dispatch } = useGetStateVariables();
	const navigate = useNavigate();

	const leaveButtonClickHandler = () => {
		dispatch(setAuth(false));
		navigate(RouteNames.DEFAULT);
	};

	const deleteAccountButtonClickHandler = () => {
		dispatch(setAuth(false));
		DeleteCookie(CookieNames.EMAIL);
		DeleteCookie(CookieNames.PASSWORD);
		DeleteCookie(CookieNames.NAME);
		DeleteCookie(CookieNames.ISLOGGED);
		const imgList = ref(storage, 'images');
		list(imgList).then(response => {
			if(response.items.length > 0){
				deleteObject(response.items[0])
			}
		})
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
