import Link from '@mui/material/Link';
import { RouteNames } from '../../../types/Enums/RouteNames';
import Typography from '@mui/material/Typography';
import MainPage from '../Shared/Main/MainPage';
import LoginButton from '../Shared/Common/LoginButton';

const UnAuthMainPage = () => {
	const Text = (
		<Typography
			sx={{
				marginTop: 1,
				cursor: 'default',
			}}
		>
			<Link href={RouteNames.AUTH_FORM}>Войдите</Link> в аккаунт и узнайте все о
			великом противостоянии наций Эрафии, продлившемся тысячелетия
		</Typography>
	);

	const loginButton = <LoginButton />;

	return (
		<>
			<MainPage
				Text={Text}
				loginButton={loginButton}
			/>
		</>
	);
};

export default UnAuthMainPage;
