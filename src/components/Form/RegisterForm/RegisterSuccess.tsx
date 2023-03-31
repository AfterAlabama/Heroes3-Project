import CheckIcon from '@mui/icons-material/Check';
import blue from '@mui/material/colors/blue';
import { FC } from 'react';

interface RegisterSuccessProps {
	success: boolean;
}

const RegisterSuccess: FC<RegisterSuccessProps> = ({ success }) => {
	const SuccessBackdrop = (
		<>
			<h1
				style={{
					fontSize: 50,
					color: blue[100],
					position: 'absolute',
					top: '30%',
					left: '30%',
					marginTop: '-12px',
					marginLeft: '-12px',
				}}
			>
				Регистрация Прошла Успешно
			</h1>
			<CheckIcon
				sx={{
					color: blue[300],
					fontSize: 60,
					position: 'absolute',
					top: '50%',
					left: '50%',
					marginTop: '-12px',
					marginLeft: '-12px',
				}}
			/>
		</>
	);

	const SuccessCondition = success && SuccessBackdrop;

	return <>{SuccessCondition}</>;
};

export default RegisterSuccess;
