import { Link as ReactRouterLink } from 'react-router-dom'
import Link from '@mui/material/Link';
import { RouteNames } from '../../../types/Enums/RouteNames';
import IsLoading from '../../Common/IsLoading/IsLoading';
import Typography from '@mui/material/Typography';

const UnAuthText = () => {
	return (
		<IsLoading>
			<Typography sx={{
				cursor: 'default',
				mt:1
			}} >
				<Link component={ReactRouterLink}
					sx={{
						textDecoration: 'none',
						'&:hover': {
							textDecoration: 'underline',
						},
					}}
					to={RouteNames.AUTH_FORM}
				>
					Войдите
				</Link>{' '}
				в аккаунт и узнайте все о великом противостоянии наций Эрафии и Антагрича,
				продлившемся тысячелетия
			</Typography>
		</IsLoading>
	);
};

export default UnAuthText;
