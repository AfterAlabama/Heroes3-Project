import HistoryHeaderTextContent from './HistoryHeaderTextContent';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { CenteredFlex, ColumnedFlex } from '../../../styles/Flex';
import HistoryHeaderLeftImages from './HistoryHeaderLeftImages';
import HistoryHeaderRightImage from './HistoryHeaderRightImage';

const HistoryHeader = () => {
	const [imageRef, headerTextContentRef, headerImagesRef] = Array(3)
		.fill(null)
		.map(() => useRef<HTMLDivElement>({} as HTMLDivElement))
	;

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
		<CenteredFlex
			onLoad={loadHandler}
			component='header'
			sx={{
				width: '100%',
				height: '100vh',
				justifyContent: 'space-around',
			}}
		>
			<ColumnedFlex
				sx={{
					width: '45%',
					height: '100%',
				}}
			>
				<HistoryHeaderTextContent ref={headerTextContentRef} />
				<HistoryHeaderLeftImages ref={headerImagesRef} />
			</ColumnedFlex>
			<HistoryHeaderRightImage ref={imageRef} />
		</CenteredFlex>
	);
};

export default HistoryHeader;
