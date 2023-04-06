import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import regPic from '../../../assets/authPic.jpg';
import RegisterFormCard from './RegisterFormCard';
import { FormContainer } from '../../../styles/FormContainer';

const RegisterForm = () => {
	return (
		<FormContainer>
			<BackgroundImage
				alt='regPic'
				src={regPic}
			/>
			<RegisterFormCard />
		</FormContainer>
	);
};

export default RegisterForm;
