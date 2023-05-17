import Box from '@mui/material/Box';
import blue from '@mui/material/colors/blue';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useContext } from 'react';
import { MainPageContext } from './MainPage';
import IsLoading from '../../../Common/IsLoading/IsLoading';
import { ColumnedFlex } from '../../../../styles/Flex';

const MainPageHeaderContent = () => {
	const { Text, loginButtonOrContent } = useContext(MainPageContext);

	return (
		<ColumnedFlex
			component='section'
			sx={{
				width: '25%',
				alignItems: 'stretch',
			}}
		>
			<IsLoading>
				<Typography
					sx={{
						fontSize: 14,
						color: 'grey',
						display: 'flex',
						gap: 0.5,
					}}
				>
					<AcUnitIcon /> Абсолютно бесплатное пользование
				</Typography>
			</IsLoading>
			<IsLoading
				sx={() => ({
					width: '80%',
					height: '100%',
				})}
			>
				<Box
					sx={{
						fontSize: 75,
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
		</ColumnedFlex>
	);
};

export default MainPageHeaderContent;
