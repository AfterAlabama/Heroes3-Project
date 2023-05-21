import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import authPic from '../../../assets/authPic.jpg';
import PasswordChangeFormCard from './PasswordChangeFormCard';
import { FormContainer } from '../../../styles/FormContainer';
import { useCallOnloadAnimation } from '../../../hooks/useCallOnloadAnimation';

const PasswordChangeForm = () => {
	useCallOnloadAnimation()
	return (
		<FormContainer>
			<BackgroundImage
				alt='authPic'
				src={authPic}
			/>
			<PasswordChangeFormCard />
		</FormContainer>
	);
};

export default PasswordChangeForm;
