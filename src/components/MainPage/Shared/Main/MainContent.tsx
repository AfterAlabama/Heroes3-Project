import Box from '@mui/material/Box';
import blue from '@mui/material/colors/blue';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useContext } from 'react';
import { MainPageContext } from './MainPage';
import IsLoading from '../../../Common/IsLoading/IsLoading';

const MainContent = () => {
	const { Text, loginButtonOrContent } = useContext(MainPageContext);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '25%',
			}}
		>
			<IsLoading>
				<Typography
					sx={{
						fontSize: 14,
						color: 'grey',
						display: 'flex',
						alignItems: 'center',
						cursor: 'default',
					}}
				>
					<AcUnitIcon /> Абсолютно бесплатное пользование
				</Typography>
			</IsLoading>
			<IsLoading sx={() => ({
				width: '80%',
				height: '100%'
			})} >
				<Box
					sx={{
						fontSize: 75,
						cursor: 'default',
					}}
				>
					Война Позабытых
					<Box
						sx={{
							background: `linear-gradient( to right, black, ${blue[600]})`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
						Поколений
					</Box>
				</Box>
			</IsLoading>
			{Text}
			{loginButtonOrContent}
		</Box>
	);
};

export default MainContent;
