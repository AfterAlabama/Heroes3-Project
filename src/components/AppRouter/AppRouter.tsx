import { Route, Routes } from 'react-router-dom';
import { RouteNames } from '../../types/Enums/RouteNames';
import AuthForm from '../Form/AuthForm/AuthForm';
import MainPage from '../MainPage';
import NotFound from '../NotFound';
import RegisterForm from '../Form/RegisterForm/RegisterForm';

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path={RouteNames.DEFAULT}
				element={<MainPage />}
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
				path={RouteNames.NOT_FOUND}
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default AppRouter;
