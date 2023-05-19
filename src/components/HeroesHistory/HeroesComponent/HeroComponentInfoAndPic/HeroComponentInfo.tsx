import Box from '@mui/material/Box';
import { useHeroComponentContext } from '../HeroComponent';
import HeroComponentInfoBox from './HeroComponentInfoBox';

const HeroComponentInfo = () => {
	const { race, gender, heroClass, specialization } = useHeroComponentContext();
	const infoBoxList = [
		['Раса', race],
		['Пол', gender],
		['Класс', heroClass],
		['Специализация', specialization],
	];

	return (
		<Box
			component='section'
			sx={{ flex: 5 }}
		>
			{infoBoxList.map((array, index) => (
				<HeroComponentInfoBox
					key={index}
					stat={array[0]}
					value={array[1]}
				/>
			))}
		</Box>
	);
};

export default HeroComponentInfo;
