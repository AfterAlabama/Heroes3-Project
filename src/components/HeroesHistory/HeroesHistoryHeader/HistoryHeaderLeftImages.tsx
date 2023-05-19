import Box from '@mui/material/Box';
import headerPic1 from '../../../assets/headerimg1.jpg';
import headerPic2 from '../../../assets/headerimg2.png';
import BlackOverlay from '../../Common/BlackOverlay/BlackOverlay';
import { forwardRef } from 'react';
import { CenteredFlex } from '../../../styles/Flex';

const HistoryHeaderLeftImages = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<CenteredFlex
			ref={ref}
			sx={{
				justifyContent: 'space-between',
				width: '100%',
				height: '20%',
				pt: 2,
				transform: 'translate(0, 50px)',
			}}
		>
			<Box
				sx={{
					position: 'relative',
					width: '70%',
					height: '100%',
				}}
			>
				<BlackOverlay />
				<Box
					component='img'
					alt='Header Image 1'
					src={headerPic1}
					width='100%'
					height='100%'
					sx={{
						borderRadius: '30px',
					}}
				/>
			</Box>
			<Box
				sx={{
					position: 'relative',
					width: '27%',
					height: '100%',
				}}
			>
				<BlackOverlay />
				<Box
					component='img'
					alt='Header Image 2'
					src={headerPic2}
					width='100%'
					height='100%'
					sx={{
						borderRadius: '30px',
					}}
				/>
			</Box>
		</CenteredFlex>
	);
});

export default HistoryHeaderLeftImages;
