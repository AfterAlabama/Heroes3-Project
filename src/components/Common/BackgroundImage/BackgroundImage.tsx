import { FC } from 'react';

interface BackgroundImageProps {
	alt: string;
	src: string;
	borderRadius?: string;
	height?: string
}

const BackgroundImage: FC<BackgroundImageProps> = ({ alt, src, borderRadius, height }) => {
	return (
		<img
			alt={alt}
			src={src}
			style={{
				position: 'absolute',
				zIndex: -1,
				width: '100%',
				height: height ? height : '100%',
				borderRadius: borderRadius
			}}
		/>
	);
};

export default BackgroundImage;
