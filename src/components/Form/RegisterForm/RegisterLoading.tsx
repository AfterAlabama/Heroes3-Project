import CircularProgress from '@mui/material/CircularProgress';
import blue from '@mui/material/colors/blue';
import { FC } from 'react';

interface RegisterLoadingProps {
	loading: boolean;
}

const RegisterLoading: FC<RegisterLoadingProps> = ({ loading }) => {
	const LoadingBackDrop = (
		<>
			<h1
				style={{
					fontSize: 50,
					color: blue[100],
					position: 'absolute',
					top: '30%',
					left: '30%',
					marginTop: '-12px',
					marginLeft: '-12px',
				}}
			>
				Регистрация Аккаунта...
			</h1>
			<CircularProgress
				size={60}
				sx={{
					color: blue[300],
					position: 'absolute',
					top: '50%',
					left: '50%',
					marginTop: '-12px',
					marginLeft: '-12px',
				}}
			/>
		</>
	);

	const LoadingCondition = loading && LoadingBackDrop;

	return <>{LoadingCondition}</>;
};

export default RegisterLoading;
