import Button from '@mui/material/Button';
import blue from '@mui/material/colors/blue';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../../types/Enums/RouteNames';
import IsLoading from '../../../Common/IsLoading/IsLoading';
import { TestIds } from '../../../../types/Enums/TestIds';

const LoginButton = () => {
	const navigate = useNavigate();
	const loginButtonClickHandler = () => {
		navigate(RouteNames.AUTH_FORM);
	};

	return (
		<IsLoading>
			<Button
				onClick={loginButtonClickHandler}
				data-testid={TestIds.AUTHLINK}
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
		</IsLoading>
	);
};

export default LoginButton;
