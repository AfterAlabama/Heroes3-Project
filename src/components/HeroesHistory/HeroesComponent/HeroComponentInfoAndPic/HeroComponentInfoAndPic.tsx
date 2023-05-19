import HeroComponentPic from './HeroComponentPic';
import HeroComponentInfo from './HeroComponentInfo';
import ResumeSectionHeader from '../../../Common/ResumeSectionHeader/ResumeSectionHeader';
import { CenteredFlex } from '../../../../styles/Flex';

const HeroComponentInfoAndPic = () => {
	return (
		<>
			<ResumeSectionHeader text='Информация о герое' />
			<CenteredFlex>
				<HeroComponentInfo />
				<HeroComponentPic />
			</CenteredFlex>
		</>
	);
};

export default HeroComponentInfoAndPic;
