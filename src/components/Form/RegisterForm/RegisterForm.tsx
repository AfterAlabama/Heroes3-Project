import Container from '@mui/material/Container';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import regPic from '../../../assets/authPic.jpg';
import RegisterFormCard from './RegisterFormCard';

const RegisterForm = () => {
	return (
		<Container
			sx={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<BackgroundImage
				alt='regPic'
				src={regPic}
			/>
			<RegisterFormCard />
		</Container>
	);
};

export default RegisterForm;
