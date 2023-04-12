import Link from '@mui/material/Link';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { MainPageCaption } from '../../../styles/MainPageCaption';
import IsLoading from '../../Common/IsLoading/IsLoading';

const UnAuthText = () => {
	return (
		<IsLoading>
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
		</IsLoading>
	);
};

export default UnAuthText;
