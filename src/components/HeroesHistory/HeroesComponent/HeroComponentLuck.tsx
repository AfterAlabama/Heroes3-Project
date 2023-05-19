import { CenteredFlex } from '../../../styles/Flex';
import { useHeroComponentContext } from './HeroComponent';
import HeroComponentStat from './HeroComponentStats/HeroComponentStat';
import { GiHorseshoe } from '@react-icons/all-files/gi/GiHorseshoe';
import { GiEagleEmblem } from '@react-icons/all-files/gi/GiEagleEmblem';
import ResumeSectionHeader from '../../Common/ResumeSectionHeader/ResumeSectionHeader';

const HeroComponentLuck = () => {
	const { luck, morale } = useHeroComponentContext();

	return (
		<>
			<ResumeSectionHeader text='Удача и Мораль' />
			<CenteredFlex
				component='section'
				gap={10}
			>
				<HeroComponentStat
					icon={
						<GiHorseshoe
							size={50}
							style={{
								transform: 'rotate(180deg)',
							}}
						/>
					}
					value={luck}
				/>
				<HeroComponentStat
					icon={<GiEagleEmblem size={50} />}
					value={morale}
				/>
			</CenteredFlex>
		</>
	);
};

export default HeroComponentLuck;
