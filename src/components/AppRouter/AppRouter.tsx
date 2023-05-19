import { Route, Routes } from 'react-router-dom';
import { RouteNames } from '../../types/Enums/RouteNames';
import AuthForm from '../Form/AuthForm/AuthForm';
import NotFound from '../Common/NotFound/NotFound';
import RegisterForm from '../Form/RegisterForm/RegisterForm';
import PasswordChangeForm from '../Form/PasswordChangeForm/PasswordChangeForm';
import UnAuthMainPage from '../MainPage/UnAuthMainPage/UnAuthMainPage';
import AuthMainPage from '../MainPage/AuthMainPage/AuthMainPage';
import { useAppSelector } from '../../hooks/reduxHooks';
import HeroesHistory from '../HeroesHistory/HeroesHistory';
import HeroComponent from '../HeroesHistory/HeroesComponent/HeroComponent';
import ArtifactsComponent from '../Artifacts/ArtifactsComponent';
import Artifact from '../Artifacts/Artifact';

const AppRouter = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);

	const isAuthCondition = isAuth ? <AuthMainPage /> : <UnAuthMainPage />;

	return (
		<Routes>
			<Route
				path={RouteNames.DEFAULT}
				element={isAuthCondition}
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
				path={RouteNames.HERO}
				element={<HeroComponent />}
			/>
			<Route
				path={RouteNames.ARTIFACTS}
				element={<ArtifactsComponent />}
			/>
			<Route
				path={RouteNames.ARTIFACT}
				element={<Artifact />}
			/>
			<Route
				path={RouteNames.NOT_FOUND}
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default AppRouter;
