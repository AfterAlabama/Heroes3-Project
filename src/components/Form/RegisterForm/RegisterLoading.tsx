import CircularProgress from '@mui/material/CircularProgress';
import blue from '@mui/material/colors/blue';
import { useAppSelector } from '../../../hooks/ReduxHooks';

const RegisterLoading = () => {
	const { isAccountBeingCreated } = useAppSelector(
		(state) => state.mainReducer
	);
	const LoadingBackDrop = (
		<>
			<h1
				style={{
					fontSize: 50,
					color: blue[100],
					position: 'absolute',
					top: '30%',
					left: '35%'
				}}
			>
				Регистрация Аккаунта...
			</h1>
			<CircularProgress
				size={60}
				sx={{
					color: blue[300],
					position: 'absolute',
					top: '45%',
					left: '50%'
				}}
			/>
		</>
	);

	const LoadingCondition = isAccountBeingCreated && LoadingBackDrop;

	return <>{LoadingCondition}</>;
};

export default RegisterLoading;
