import CheckIcon from '@mui/icons-material/Check';
import blue from '@mui/material/colors/blue';
import { useAppSelector } from '../../../hooks/ReduxHooks';

const RegisterSuccess = () => {
	const { isAccountCreated } = useAppSelector((state) => state.mainReducer);
	const SuccessBackdrop = (
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
				Регистрация Прошла Успешно
			</h1>
			<CheckIcon
				sx={{
					color: blue[300],
					fontSize: 60,
					position: 'absolute',
					top: '45%',
					left: '50%'
				}}
			/>
		</>
	);

	const SuccessCondition = isAccountCreated && SuccessBackdrop;

	return <>{SuccessCondition}</>;
};

export default RegisterSuccess;
