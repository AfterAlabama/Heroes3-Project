import CircularProgress from '@mui/material/CircularProgress';
import blue from '@mui/material/colors/blue';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { BackdropCaption } from '../../../styles/BackdropCaption';

const RegisterLoading = () => {
	const { isAccountBeingCreated } = useAppSelector(
		(state) => state.mainReducer
	);

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
