import CheckIcon from '@mui/icons-material/Check';
import blue from '@mui/material/colors/blue';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { BackdropCaption } from '../../../styles/BackdropCaption';

const RegisterSuccess = () => {
	const { isAccountCreated } = useAppSelector((state) => state.mainReducer);

	return (
		<>
			{isAccountCreated && (
				<>
					<BackdropCaption>Регистрация Прошла Успешно</BackdropCaption>
					<CheckIcon
						sx={{
							color: blue[300],
							fontSize: 60,
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

export default RegisterSuccess;
