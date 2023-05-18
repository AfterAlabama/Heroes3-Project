import Box from '@mui/material/Box';
import HistoryImage from './HistoryImage';
import HistoryHeaderTextContent from './HistoryHeaderTextContent';
import HistoryHeaderImages from './HistoryHeaderImages';
import { useRef } from 'react';
import { gsap } from 'gsap';

const HistoryHeader = () => {
	const imageRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const headerTextContentRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const headerImagesRef = useRef<HTMLDivElement>({} as HTMLDivElement);

	const loadHandler = () => {
		gsap.to(headerTextContentRef.current, {
			duration: 1.4,
			x: 0,
			ease: 'back',
		});
		gsap.to(imageRef.current, {
			duration: 1.5,
			x: 0,
			ease: 'back',
		});
		gsap.to(headerImagesRef.current, {
			duration: 1.6,
			y: 0,
			ease: 'back',
		});
	};

	return (
		<Box
			onLoad={loadHandler}
			component='header'
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around',
			}}
		>
			<Box
				sx={{
					width: '45%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<HistoryHeaderTextContent ref={headerTextContentRef} />
				<HistoryHeaderImages ref={headerImagesRef} />
			</Box>
			<HistoryImage ref={imageRef} />
		</Box>
	);
};

export default HistoryHeader;
