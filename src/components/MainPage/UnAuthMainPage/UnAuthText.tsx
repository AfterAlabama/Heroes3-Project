import Link from '@mui/material/Link';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { MainPageCaption } from '../../../styles/MainPageCaption';

const UnAuthText = () => {
	return (
		<MainPageCaption>
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
		</MainPageCaption>
	);
};

export default UnAuthText;
