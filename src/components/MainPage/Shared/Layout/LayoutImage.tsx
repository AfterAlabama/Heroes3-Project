import HeroPic from '../../../../assets/heroes-3-hdtcm21186796.0.0.png';

const LayoutImage = () => {
	return (
		<img
			alt='HeroPic'
			src={HeroPic}
			style={{
				width: '50%',
				height: '50%',
				zIndex: 3,
			}}
		/>
	);
};

export default LayoutImage;
