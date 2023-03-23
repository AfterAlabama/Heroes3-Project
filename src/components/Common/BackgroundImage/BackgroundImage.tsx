import { FC } from 'react';

interface BackgroundImageProps {
	alt: string;
	src: string;
}

const BackgroundImage: FC<BackgroundImageProps> = ({ alt, src }) => {
	return (
		<img
			alt={alt}
			src={src}
			style={{
				position: 'absolute',
				zIndex: -1,
				width: '100%',
				height: '100%',
				opacity: 0.7,
			}}
		/>
	);
};

export default BackgroundImage;
