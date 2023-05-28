import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import regPic from '../../../assets/authPic.jpg';
import RegisterFormCard from './RegisterFormCard';
import { FormContainer } from '../../../styles/FormContainer';
import { useCallOnloadAnimation } from '../../../hooks/useCallOnloadAnimation';

const RegisterForm = () => {
	useCallOnloadAnimation()
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
