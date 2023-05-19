import { GiBroadsword } from '@react-icons/all-files/gi/GiBroadsword';
import { useHeroComponentContext } from '../HeroComponent';
import HeroComponentStat from './HeroComponentStat';
import { CenteredFlex } from '../../../../styles/Flex';
import { BsFillShieldFill } from '@react-icons/all-files/bs/BsFillShieldFill';
import { GiOpenBook } from '@react-icons/all-files/gi/GiOpenBook';
import { GiBoltSpellCast } from '@react-icons/all-files/gi/GiBoltSpellCast';
import ResumeSectionHeader from '../../../Common/ResumeSectionHeader/ResumeSectionHeader';

const HeroComponentStats = () => {
	const { attack, defense, power, knowledge } = useHeroComponentContext();

	const getIcon = (index: number) => {
		const statIcons = [
			<GiBroadsword
				size={50}
				key={0}
			/>,
			<BsFillShieldFill
				size={50}
				key={1}
			/>,
			<GiBoltSpellCast
				size={50}
				key={2}
			/>,
			<GiOpenBook
				size={60}
				key={3}
			/>,
		];
		return statIcons[index];
	};

	return (
		<>
			<ResumeSectionHeader text='Характеристики' />
			<CenteredFlex
				component='section'
				gap={10}
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
