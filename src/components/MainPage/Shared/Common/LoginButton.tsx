import Button from '@mui/material/Button';
import blue from '@mui/material/colors/blue';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../../types/Enums/RouteNames';

const LoginButton = () => {
	const navigate = useNavigate();
	const loginButtonClickHandler = () => {
		navigate(RouteNames.AUTH_FORM);
	};

	return (
		<Button
			onClick={loginButtonClickHandler}
			sx={{
				mt: 2,
				color: 'white',
				backgroundColor: blue[500],
				'&:hover': {
					backgroundColor: blue[200],
				},
			}}
		>
			Войдите чтобы смотреть
		</Button>
	);
};

export default LoginButton;
