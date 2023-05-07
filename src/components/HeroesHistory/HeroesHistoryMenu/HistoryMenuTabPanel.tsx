import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react';

interface TabPanelProps {
	children?: ReactNode;
	dir?: string;
	index: number;
	value: number;
}

const HistoryMenuTabPanel: FC<TabPanelProps> = ({
	children,
	index,
	value,
	...other
}) => {
	const tabPanel = value === index && (
		<Box>
			{children}
		</Box>
	);

	return (
		<Box
			sx={{
				width: '90vw'
			}}
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{tabPanel}
		</Box>
	);
};

export default HistoryMenuTabPanel;
