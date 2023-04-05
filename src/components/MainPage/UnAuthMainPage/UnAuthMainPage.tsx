import MainPage from '../Shared/Main/MainPage';
import LoginButton from '../Shared/Common/LoginButton';
import UnAuthText from './UnAuthText';

const UnAuthMainPage = () => {
	return (
		<>
			<MainPage
				Text={<UnAuthText />}
				loginButtonOrContent={<LoginButton />}
			/>
		</>
	);
};

export default UnAuthMainPage;
