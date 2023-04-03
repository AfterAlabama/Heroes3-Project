import { Route, Routes } from 'react-router-dom';
import { RouteNames } from '../../types/Enums/RouteNames';
import AuthForm from '../Form/AuthForm/AuthForm';
import NotFound from '../Common/NotFound/NotFound';
import RegisterForm from '../Form/RegisterForm/RegisterForm';
import PasswordChangeForm from '../Form/PasswordChangeForm/PasswordChangeForm';
import UnAuthMainPage from '../MainPage/UnAuthMainPage/UnAuthMainPage';
import AuthMainPage from '../MainPage/AuthMainPage/AuthMainPage';
import { useAppSelector } from '../../hooks/ReduxHooks';
import HeroesHistory from '../HeroesHistory/HeroesHistory';

const AppRouter = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);
	return (
		<Routes>
			<Route
				path={RouteNames.DEFAULT}
				element={isAuth ? <AuthMainPage /> : <UnAuthMainPage />}
			/>
			<Route
				path={RouteNames.AUTH_FORM}
				element={<AuthForm />}
			/>
			<Route
				path={RouteNames.REGISTER_FORM}
				element={<RegisterForm />}
			/>
			<Route
				path={RouteNames.PASSWORD_CHANGE}
				element={<PasswordChangeForm />}
			/>
			<Route
				path={RouteNames.HEROES_HISTORY}
				element={<HeroesHistory />}
			/>
			<Route
				path={RouteNames.NOT_FOUND}
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default AppRouter;
