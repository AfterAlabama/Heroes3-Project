import { useParams } from 'react-router-dom';
import HeroComponentTitle from './HeroComponentTitle';
import { ColumnedFlex } from '../../../styles/Flex';
import { createContext, useContext } from 'react';
import { Hero } from '../../../heroes/Hero';
import { heroesArray } from '../../../heroes/HeroesArray';
import PrevPageArrow from '../../Common/PrevPageArrow/PrevPageArrow';
import { useCallOnloadAnimation } from '../../../hooks/useCallOnloadAnimation';
import HeroComponentResume from './HeroComponentResume';

const HeroComponentContext = createContext<Hero>({} as Hero);

export const useHeroComponentContext = () => useContext(HeroComponentContext);

const HeroComponent = () => {
	const { name } = useParams();
	const hero = heroesArray
		.map((arr) => arr.filter((hero) => name && hero.name === name))
		.filter((arr2) => arr2.length > 0)[0][0]
	;

	useCallOnloadAnimation();

	return (
		<ColumnedFlex
			sx={{
				width: '100%',
				height: '200vh',
				backgroundColor: '#f4f4f4',
				gap:5
			}}
		>
			<PrevPageArrow />
			<HeroComponentContext.Provider value={hero}>
				<HeroComponentTitle />
				<HeroComponentResume />
			</HeroComponentContext.Provider>
		</ColumnedFlex>
	);
};

export default HeroComponent;
