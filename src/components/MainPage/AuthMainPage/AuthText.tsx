import { MainPageCaption } from '../../../styles/MainPageCaption';
import IsLoading from '../../Common/IsLoading/IsLoading';

const AuthText = () => {
	return (
		<IsLoading>
			<MainPageCaption>
				Погрузитесь в мир удивительных баталий и отважных героев из всемилюбимой
				серии Heroes Might & Magic 3!
			</MainPageCaption>
		</IsLoading>
	);
};

export default AuthText;
