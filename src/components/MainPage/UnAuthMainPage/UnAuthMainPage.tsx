import { RouteNames } from '../../../types/Enums/RouteNames';
import NavigationButton from '../../Common/NavigationButton/NavigationButton';
import MainPage from '../Shared/MainPageComponent/MainPage';
import UnAuthText from './UnAuthText';

const UnAuthMainPage = () => {
	return (
		<>
			<MainPage
				Text={<UnAuthText />}
				loginButtonOrContent={
					<NavigationButton
						buttonText='Войдите, чтобы смотреть'
						direction={RouteNames.AUTH_FORM}
						ButtonSxProp={{
							width: 'full-width',
							mt: 4,
							borderRadius: 'none',
							transition: 'all 0.5s ease',
							'&:hover': {
								transform: 'translateY(-10px)',
								boxShadow: '5px 5px 10px rgba(0,0,0,0.6)',
							},
						}}
					/>
				}
			/>
		</>
	);
};

export default UnAuthMainPage;
