import LayoutCircle from '../Layout/LayoutCircle';
import LayoutImage from '../Layout/LayoutImage';
import MainPageHeaderContent from './MainPageHeaderContent';
import { CenteredFlex } from '../../../../styles/Flex';

const MainPageHeader = () => {
	return (
		<CenteredFlex
			component='header'
			sx={{
				height: '100vh',
				width: '100%',
				justifyContent: 'space-around',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<MainPageHeaderContent />
			<LayoutImage />
			<LayoutCircle />
		</CenteredFlex>
	);
};

export default MainPageHeader;
