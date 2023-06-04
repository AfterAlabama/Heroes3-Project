import { Route, Routes } from 'react-router-dom';
import { RouteNames } from '../../types/Enums/RouteNames';
import AuthForm from '../Form/AuthForm/AuthForm';
import NotFound from '../Common/NotFound/NotFound';
import RegisterForm from '../Form/RegisterForm/RegisterForm';
import PasswordChangeForm from '../Form/PasswordChangeForm/PasswordChangeForm';
import UnAuthMainPage from '../MainPage/UnAuthMainPage/UnAuthMainPage';
import AuthMainPage from '../MainPage/AuthMainPage/AuthMainPage';
import HeroComponent from '../HeroesHistory/HeroesComponent/HeroComponent';
import ArtifactsResume from '../Artifacts/ArtifactResume/ArtifactsResume';
import { Suspense, lazy } from 'react';
import LoadingPage from '../Common/LoadingPage/LoadingPage';
import { useGetStateVariables } from '../../hooks/useGetStateVariables';

const HeroesHistory = lazy(() => import('../HeroesHistory/HeroesHistory'));

const ArtifactsComponent = lazy(
	() => import('../Artifacts/ArtifactsComponent')
);

const AppRouter = () => {
	const { isAuth } = useGetStateVariables()

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
				element={
					<Suspense fallback={<LoadingPage />}>
						<HeroesHistory />
					</Suspense>
				}
			/>
			<Route
				path={RouteNames.HERO}
				element={<HeroComponent />}
			/>
			<Route
				path={RouteNames.ARTIFACTS}
				element={
					<Suspense fallback={<LoadingPage />}>
						<ArtifactsComponent />
					</Suspense>
				}
			/>
			<Route
				path={RouteNames.ARTIFACT}
				element={<ArtifactsResume />}
			/>
			<Route
				path={RouteNames.NOT_FOUND}
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default AppRouter;
