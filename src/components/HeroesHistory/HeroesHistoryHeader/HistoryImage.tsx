import Box from '@mui/material/Box';
import heroesOverview from '../../../assets/heroesoverview.jpg';
import BlackOverlay from '../../Common/BlackOverlay/BlackOverlay';
import { forwardRef } from 'react';

const HistoryImage = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<Box
			ref={ref}
			sx={{
				width: '45%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				transform: 'translate(50px, 0)',
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '70%',
					position: 'relative',
				}}
			>
				<BlackOverlay />
				<img
					style={{
						borderRadius: '30px',
					}}
					width='100%'
					height='100%'
					src={heroesOverview}
				/>
			</Box>
		</Box>
	);
});

export default HistoryImage;
