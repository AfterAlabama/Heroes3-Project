import Container from '@mui/material/Container';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import authPic from '../../../assets/authPic.jpg';
import PasswordChangeFormCard from './PasswordChangeFormCard';

const PasswordChangeForm = () => {
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
			<PasswordChangeFormCard />
		</Container>
	);
};

export default PasswordChangeForm;
