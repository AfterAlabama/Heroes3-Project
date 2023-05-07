import HeroComponentSectionTitle from './HeroComponentSectionTitle';
import { GiBroadsword } from 'react-icons/gi';
import { useHeroComponentContext } from './HeroComponent';
import HeroComponentStat from './HeroComponentStat';
import { CenteredFlex } from '../../../styles/CenteredFlex';
import { BsFillShieldFill } from 'react-icons/bs';
import { GiOpenBook, GiBoltSpellCast } from 'react-icons/gi';

const HeroComponentStats = () => {
	const { attack, defense, power, knowledge } = useHeroComponentContext();

	const getIcon = (index: number) => {
		if (index === 0) return <GiBroadsword size={50} />;
		if (index === 1) return <BsFillShieldFill size={50} />;
		if (index === 2) return <GiBoltSpellCast size={50} />;
		return <GiOpenBook size={60} />;
	};

	return (
		<>
			<HeroComponentSectionTitle text='Характеристики' />
			<CenteredFlex
				sx={{
					gap: 10,
				}}
			>
				{[attack, defense, power, knowledge].map((stat, index) => (
					<HeroComponentStat
						key={index}
						icon={getIcon(index)}
						value={stat}
					/>
				))}
			</CenteredFlex>
		</>
	);
};

export default HeroComponentStats;
