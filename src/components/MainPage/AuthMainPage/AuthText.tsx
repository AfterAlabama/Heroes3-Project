import Typography from '@mui/material/Typography';
import IsLoading from '../../Common/IsLoading/IsLoading';

const AuthText = () => {
	return (
		<IsLoading>
			<Typography sx={{
				cursor: 'default',
				mt: 1
			}} >
				Погрузитесь в мир удивительных баталий и отважных героев из всемилюбимой
				серии Heroes Might & Magic 3!
			</Typography>
		</IsLoading>
	);
};

export default AuthText;
