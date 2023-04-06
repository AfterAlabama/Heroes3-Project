import Box from '@mui/material/Box';
import headerPic1 from '../../../assets/headerimg1.jpg';
import headerPic2 from '../../../assets/headerimg2.png';
import BlackOverlay from '../../Common/BlackOverlay/BlackOverlay';
import { forwardRef } from 'react';

const HistoryHeaderImages = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<Box
			ref={ref}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
				height: '20%',
				paddingTop: 2,
				transform: 'translate(0, 1000px)',
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
				<img
					alt='Header Image 1'
					src={headerPic1}
					width='100%'
					height='100%'
					style={{
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
				<img
					alt='Header Image 2'
					src={headerPic2}
					width='100%'
					height='100%'
					style={{
						borderRadius: '30px',
					}}
				/>
			</Box>
		</Box>
	);
});

export default HistoryHeaderImages;
