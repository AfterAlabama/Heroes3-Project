import Box from '@mui/material/Box';
import HeroPic from '../../../../assets/heroes-3-hdtcm21186796.0.0.png';

const LayoutImage = () => {
	return (
		<Box
			component='img'
			alt='HeroPic'
			src={HeroPic}
			sx={{
				width: '50%',
				height: '50%',
				zIndex: 3,
			}}
		/>
	);
};

export default LayoutImage;
