import HeroComponentSectionTitle from './HeroComponentSectionTitle';
import { GiBroadsword } from '@react-icons/all-files/gi/GiBroadsword';
import { useHeroComponentContext } from './HeroComponent';
import HeroComponentStat from './HeroComponentStat';
import { CenteredFlex } from '../../../styles/Flex';
import { BsFillShieldFill } from '@react-icons/all-files/bs/BsFillShieldFill';
import { GiOpenBook } from '@react-icons/all-files/gi/GiOpenBook';
import { GiBoltSpellCast } from '@react-icons/all-files/gi/GiBoltSpellCast';

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
