import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createContext, ReactElement } from 'react';
import MainPage from '../Shared/Main/MainPage';

interface MainPageProps {
	Text: ReactElement<HTMLSpanElement>;
	loginButton: ReactElement<HTMLButtonElement>;
}

export const MainPageContext = createContext<MainPageProps>(
	{} as MainPageProps
);

const AuthMainPage = () => {
	const Text = (
		<Typography
			sx={{
				marginTop: 1,
				cursor: 'default',
			}}
		>
			Невероятная хуйняяяяяя
		</Typography>
	);

	const loginButton = <Button>Загружен</Button>;

	return (
		<>
			<MainPage Text={Text} loginButton={loginButton} />
		</>
	);
};

export default AuthMainPage;
