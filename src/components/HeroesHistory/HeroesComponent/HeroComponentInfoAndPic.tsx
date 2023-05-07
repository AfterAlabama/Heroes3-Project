import Box from '@mui/material/Box';
import HeroComponentPic from './HeroComponentPic';
import HeroComponentInfo from './HeroComponentInfo';
import HeroComponentSectionTitle from './HeroComponentSectionTitle';

const HeroComponentInfoAndPic = () => {
	return (
		<>
			<HeroComponentSectionTitle text='Информация о герое' />
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<HeroComponentInfo />
				<HeroComponentPic />
			</Box>
		</>
	);
};

export default HeroComponentInfoAndPic;
