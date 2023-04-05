import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import { RouteNames } from '../../../types/Enums/RouteNames';

const AuthFormHelperText = () => {
	return (
		<FormHelperText
			sx={{
				marginLeft: 24,
				marginTop: -2,
				marginBottom: 2,
			}}
		>
			<Link
				href={RouteNames.PASSWORD_CHANGE}
				sx={{
					color: 'grey',
					textDecoration: 'none',
					cursor: 'pointer',
				}}
			>
				Забыли пароль?
			</Link>
		</FormHelperText>
	);
};

export default AuthFormHelperText;
