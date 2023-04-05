import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { RouteNames } from '../../../types/Enums/RouteNames';

const UnAuthText = () => {
	return (
		<Typography
			sx={{
				marginTop: 1,
				cursor: 'default',
			}}
		>
			<Link
				sx={{
					textDecoration: 'none',
					'&:hover': {
						textDecoration: 'underline',
					},
				}}
				href={RouteNames.AUTH_FORM}
			>
				Войдите
			</Link>{' '}
			в аккаунт и узнайте все о великом противостоянии наций Эрафии и Антагрича,
			продлившемся тысячелетия
		</Typography>
	);
};

export default UnAuthText;
