import Box from '@mui/material/Box';
import heroesOverview from '../../../assets/heroesoverview.jpg';
import BlackOverlay from '../../Common/BlackOverlay/BlackOverlay';
import { forwardRef } from 'react';
import { CenteredFlex } from '../../../styles/Flex';

const HistoryHeaderRightImage = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<CenteredFlex
			ref={ref}
			sx={{
				width: '45%',
				height: '70%',
				position: 'relative',
				transform: 'translate(50px, 0)',
			}}
		>
			<BlackOverlay />
			<Box
				component='img'
				sx={{
					borderRadius: '30px',
				}}
				alt='Header Right Image'
				width='100%'
				height='100%'
				src={heroesOverview}
			/>
		</CenteredFlex>
	);
});

export default HistoryHeaderRightImage;
