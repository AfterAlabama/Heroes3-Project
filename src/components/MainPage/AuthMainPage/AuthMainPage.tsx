import Typography from '@mui/material/Typography';
import { createContext, ReactElement } from 'react';
import MainPage from '../Shared/Main/MainPage';
import Box from '@mui/material/Box';
import AnchorIcon from '@mui/icons-material/Anchor';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ColorizeIcon from '@mui/icons-material/Colorize';
import blue from '@mui/material/colors/blue';

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
			Погрузитесь в мир удивительных баталий и отважных героев из всемилюбимой
			серии Heroes Might & Magic 3!
		</Typography>
	);

	const loginButton = (
		<Box
			sx={{
				marginTop: 5,
				color: blue[200],
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around',
			}}
		>
			<Box
				sx={{
					border: 'solid rgba(0,0,0,0.3) 1px',
					padding: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '50%',
				}}
			>
				<AutoFixHighIcon />
			</Box>
			<Box
				sx={{
					border: 'solid rgba(0,0,0,0.3) 1px',
					padding: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '50%',
				}}
			>
				<AnchorIcon />
			</Box>
			<Box
				sx={{
					border: 'solid rgba(0,0,0,0.3) 1px',
					padding: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '50%',
				}}
			>
				<ColorizeIcon />
			</Box>
		</Box>
	);

	return (
		<>
			<MainPage
				Text={Text}
				loginButtonOrContent={loginButton}
			/>
		</>
	);
};

export default AuthMainPage;
