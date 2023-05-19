import Paper from '@mui/material/Paper';
import HeroComponentDescription from './HeroComponentDescription';
import HeroComponentInfoAndPic from './HeroComponentInfoAndPic/HeroComponentInfoAndPic';
import HeroComponentLuck from './HeroComponentLuck';
import HeroComponentMagic from './HeroComponentMagic';
import HeroComponentSpecialties from './HeroComponentSpecialties';
import HeroComponentStats from './HeroComponentStats/HeroComponentStats';

const HeroComponentResume = () => {
	return (
		<Paper
			component='main'
			sx={{
				width: '80vh',
				height: '170vh',
				display: 'flex',
				flexDirection: 'column',
				borderRadius: '10px',
				pl:5
			}}
			elevation={3}
		>
			<HeroComponentInfoAndPic />
			<HeroComponentStats />
			<HeroComponentLuck />
			<HeroComponentMagic />
			<HeroComponentSpecialties />
			<HeroComponentDescription />
		</Paper>
	);
};

export default HeroComponentResume;
