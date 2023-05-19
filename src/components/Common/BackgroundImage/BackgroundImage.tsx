import Box from '@mui/material/Box';
import { FC } from 'react';

interface BackgroundImageProps {
	alt: string;
	src: string;
	borderRadius?: string;
	height?: string;
}

const BackgroundImage: FC<BackgroundImageProps> = ({
	alt,
	src,
	borderRadius,
	height,
}) => {
	return (
		<Box
			component='img'
			alt={alt}
			src={src}
			sx={{
				position: 'absolute',
				zIndex: -1,
				width: '100%',
				height: height ? height : '100%',
				borderRadius: borderRadius,
			}}
		/>
	);
};

export default BackgroundImage;
