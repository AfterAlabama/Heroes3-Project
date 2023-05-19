import HistoryMenuTabs from './HistoryMenuTabs';
import HistoryMenuTabPanels from './HeroesHistoryMenuTabPanels/HistoryMenuTabPanels';
import HistoryMenuTitle from './HistoryMenuTitle';
import { ColumnedFlex } from '../../../styles/Flex';

const HistoryMenu = () => {
	return (
		<ColumnedFlex
			component='main'
			gap={5}
		>
			<HistoryMenuTitle />
			<ColumnedFlex
				component='section'
				sx={{
					bgcolor: 'background.paper',
					height: '100vh',
					justifyContent: 'flex-start',
				}}
			>
				<HistoryMenuTabs />
				<HistoryMenuTabPanels />
			</ColumnedFlex>
		</ColumnedFlex>
	);
};

export default HistoryMenu;
