import FormHelperText from '@mui/material/FormHelperText';
import { Link as ReactRouterLink} from 'react-router-dom'
import Link from '@mui/material/Link';
import { RouteNames } from '../../../types/Enums/RouteNames';
import IsLoading from '../../Common/IsLoading/IsLoading';

const AuthFormHelperText = () => {
	return (
		<IsLoading sx={() => ({
			height: 30,
			width: '40%',
			mr: -25
		})} >
			<FormHelperText
				sx={{
					ml: 24,
					mt: -2,
					mb: 2,
				}}
			>
				<Link
					component={ReactRouterLink}
					to={RouteNames.PASSWORD_CHANGE}
					sx={{
						color: 'grey',
						textDecoration: 'none',
						cursor: 'pointer',
					}}
				>
					Забыли пароль?
				</Link>
			</FormHelperText>
		</IsLoading>
	);
};

export default AuthFormHelperText;
