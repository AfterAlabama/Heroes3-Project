import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import HeroComponentTitle from './HeroComponentTitle';
import HeroComponentInfoAndPic from './HeroComponentInfoAndPic';
import HeroComponentStats from './HeroComponentStats';
import { CenteredFlex } from '../../../styles/Flex';
import { createContext, useContext, useEffect } from 'react';
import { Hero } from '../../../heroes/Hero';
import HeroComponentLuck from './HeroComponentLuck';
import HeroComponentMagic from './HeroComponentMagic';
import HeroComponentSpecialties from './HeroComponentSpecialties';
import HeroComponentDescription from './HeroComponentDescription';
import { heroesArray } from '../../../heroes/HeroesArray';
import Box from '@mui/material/Box';
import PrevPageArrow from '../../Common/PrevPageArrow/PrevPageArrow';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { useAppDispatch } from '../../../hooks/ReduxHooks';

const HeroComponentContext = createContext<Hero>({} as Hero);

export const useHeroComponentContext = () => useContext(HeroComponentContext);

const HeroComponent = () => {
	const { name } = useParams();
	const { changeIsComponentLoading } = MainSlice.actions;
	const dispatch = useAppDispatch();

	const hero = heroesArray
		.map((arr) => arr.filter((hero) => name && hero.name === name))
		.filter((arr2) => arr2.length > 0)[0][0];
	useEffect(() => {
		dispatch(changeIsComponentLoading(true));
	}, []);

	return (
		<Box>
			<PrevPageArrow />
			<CenteredFlex
				sx={{
					width: '100%',
					height: '200vh',
					backgroundColor: '#f4f4f4',
					flexDirection: 'column',
				}}
			>
				<HeroComponentContext.Provider value={hero}>
					<HeroComponentTitle />
					<Paper
						sx={{
							width: '80vh',
							height: '170vh',
							display: 'flex',
							flexDirection: 'column',
							borderRadius: '10px',
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
				</HeroComponentContext.Provider>
			</CenteredFlex>
		</Box>
	);
};

export default HeroComponent;
