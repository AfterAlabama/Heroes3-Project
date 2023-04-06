import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
		<Box sx={{ p: 3 }}>
			<Typography>{children}</Typography>
		</Box>
	);

	return (
		<Box
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
