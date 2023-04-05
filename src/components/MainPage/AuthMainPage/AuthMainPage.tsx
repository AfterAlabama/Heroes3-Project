import MainPage from '../Shared/Main/MainPage';
import AuthText from './AuthText';
import AuthContent from './AuthContent';

const AuthMainPage = () => {
	return (
		<>
			<MainPage
				Text={<AuthText />}
				loginButtonOrContent={<AuthContent />}
			/>
		</>
	);
};

export default AuthMainPage;
