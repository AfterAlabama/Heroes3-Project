import CircularProgress from '@mui/material/CircularProgress';
import blue from '@mui/material/colors/blue';
import { BackdropCaption } from '../../../styles/BackdropCaption';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const RegisterLoading = () => {
	const { isAccountBeingCreated } = useGetStateVariables();

	return (
		<>
			{isAccountBeingCreated && (
				<>
					<BackdropCaption>Регистрация Аккаунта...</BackdropCaption>
					<CircularProgress
						size={60}
						sx={{
							color: blue[300],
							position: 'absolute',
							top: '45%',
							left: '50%',
						}}
					/>
				</>
			)}
		</>
	);
};

export default RegisterLoading;
