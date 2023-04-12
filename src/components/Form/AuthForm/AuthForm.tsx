import authPic from '../../../assets/authPic.jpg';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import AuthFormCard from './AuthFormCard';
import { FormContainer } from '../../../styles/FormContainer';
import AuthFormSnackbar from './AuthFormSnackbar';

const AuthForm = () => {
	return (
		<>
			<FormContainer>
				<BackgroundImage
					alt='authPic'
					src={authPic}
				/>
				<AuthFormCard />
			</FormContainer>
			<AuthFormSnackbar />
		</>
	);
};

export default AuthForm;
