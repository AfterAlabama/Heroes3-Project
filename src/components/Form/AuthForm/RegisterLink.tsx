import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { RouteNames } from '../../../types/Enums/RouteNames';

const RegisterLink = () => {
	return (
		<Typography
			sx={{
				marginTop: 3,
				color: 'gray',
			}}
		>
			Ещё нет аккаунта?
			<Link
				href={RouteNames.REGISTER_FORM}
				sx={{
					cursor: 'pointer',
				}}
			>
				Зарегистрироваться
			</Link>
		</Typography>
	);
};

export default RegisterLink;
