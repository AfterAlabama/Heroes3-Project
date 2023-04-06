import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import blue from '@mui/material/colors/blue';
import { forwardRef } from 'react';

const HistoryHeaderTextContent = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<Box
			ref={ref}
			sx={{
				width: '100%',
				height: '50%',
				transform: 'translate(-1000px, 0)'
			}}
		>
			<Box
				sx={{
					backgroundColor: '#f4f1f9',
					width: '100%',
					height: '100%',
					borderRadius: '30px',
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: 'column',
					padding: 5,
					cursor: 'default',
				}}
			>
				<Box
					sx={{
						fontSize: 65,
						width: '85%',
						lineHeight: 1,
						fontFamily: 'sans-serif'
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
			</Box>
		</Box>
	);
})

export default HistoryHeaderTextContent;
