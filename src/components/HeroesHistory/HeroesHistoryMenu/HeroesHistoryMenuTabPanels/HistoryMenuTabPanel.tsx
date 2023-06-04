import Box from '@mui/material/Box';
import { FC } from 'react';
import { ColumnedFlex } from '../../../../styles/Flex';
import BlackOverlay from '../../../Common/BlackOverlay/BlackOverlay';
import BackgroundImage from '../../../Common/BackgroundImage/BackgroundImage';
import HistoryMenuAccordions from '../HeroesHistoryMenuAccordions/HistoryMenuAccordions';
import HistoryMenuPagination from '../HeroesHistoryMenuPagination/HistoryMenuPagination';
import { AlignmentPics } from '../../../../types/Enums/Alignments';

interface TabPanelProps {
	dir?: string;
	arrayIndex: number;
	value: number;
}

const HistoryMenuTabPanel: FC<TabPanelProps> = ({
	arrayIndex,
	value,
	...other
}) => {
	return (
		<Box
			component='section'
			sx={{
				width: '90vw',
			}}
			role='tabpanel'
			hidden={value !== arrayIndex}
			{...other}
		>
			{value === arrayIndex && (
				<ColumnedFlex
					sx={{
						alignItems: 'flex-start',
						justifyContent: 'flex-start',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<BlackOverlay />
					<BackgroundImage
						alt='Alignment city'
						src={AlignmentPics[arrayIndex]}
						borderRadius='30px'
						height='85vh'
					/>
					<HistoryMenuAccordions arrayIndex={arrayIndex} />
					<HistoryMenuPagination arrayIndex={arrayIndex} />
				</ColumnedFlex>
			)}
		</Box>
	);
};

export default HistoryMenuTabPanel;
