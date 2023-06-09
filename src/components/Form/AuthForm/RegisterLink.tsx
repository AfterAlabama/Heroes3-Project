import { Link as ReactRouterLink } from 'react-router-dom'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { RouteNames } from '../../../types/Enums/RouteNames';
import IsLoading from '../../Common/IsLoading/IsLoading';

const RegisterLink = () => {
	return (
		<IsLoading>
			<Typography
				sx={{
					mt: 3,
					color: 'gray',
				}}
			>
				Ещё нет аккаунта?
				<Link
					component={ReactRouterLink}
					to={RouteNames.REGISTER_FORM}
					sx={{
						cursor: 'pointer',
					}}
				>
					Зарегистрироваться
				</Link>
			</Typography>
		</IsLoading>
	);
};

export default RegisterLink;
