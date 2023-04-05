import Container from '@mui/material/Container';
import authPic from '../../../assets/authPic.jpg';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import AuthFormCard from './AuthFormCard';

const AuthForm = () => {
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
				alt='authPic'
				src={authPic}
			/>
			<AuthFormCard />
		</Container>
	);
};

export default AuthForm;
