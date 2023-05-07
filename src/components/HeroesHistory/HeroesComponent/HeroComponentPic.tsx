import { useHeroComponentContext } from './HeroComponent';

const HeroComponentPic = () => {
	const { pic } = useHeroComponentContext();
	return (
		<img
			style={{
				width: '15vh',
				height: '15vh',
				borderRadius: '50%',
				margin: '20px 20px 0 0',
				flex: 1,
			}}
			alt='hero pic'
			src={pic}
		/>
	);
};

export default HeroComponentPic;
