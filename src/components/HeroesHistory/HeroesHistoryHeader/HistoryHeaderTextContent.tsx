import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import blue from '@mui/material/colors/blue';
import { forwardRef } from 'react';
import { ColumnedFlex } from '../../../styles/Flex';

const HistoryHeaderTextContent = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<ColumnedFlex
			component='article'
			ref={ref}
			sx={{
				width: '100%',
				height: '50%',
				backgroundColor: '#f4f1f9',
				borderRadius: '30px',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				p: 5,
				transform: 'translate(-50px, 0)',
			}}
		>
			<Box
				component='h1'
				sx={{
					fontSize: 60,
					width: '85%',
					lineHeight: 1,
					fontFamily: 'sans-serif',
				}}
			>
				Всевозможные великие герои c
				<Box
					sx={{
						background: `linear-gradient( to right, black, ${blue[400]})`,
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
				>
					Энрота и Антагарича
				</Box>
			</Box>
			<Typography
				sx={{
					width: '40%',
				}}
			>
				Ниже мы перечислили всевозможных героев, как воинов, так и магов, со
				всех известных континентов из всеми любимой {''}
				<i>Heroes 3 of Might & Magic!</i>
			</Typography>
		</ColumnedFlex>
	);
});

export default HistoryHeaderTextContent;
