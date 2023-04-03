import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface FooterGridItemsProps {
	GridItemsHead: string;
	GridItems: string[];
}

const FooterGridItems: FC<FooterGridItemsProps> = ({
	GridItemsHead,
	GridItems,
}) => {
	const GridItemsArray = GridItems.map((item, index) => (
		<Typography
			key={index}
			sx={{
				fontSize: 15,
			}}
		>
			{item}
		</Typography>
	));

	return (
		<Grid item>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					height: '22vh',
				}}
			>
				<Typography
					sx={{
						fontWeight: 'bold',
					}}
				>
					{GridItemsHead}
				</Typography>
				{GridItemsArray}
			</Box>
		</Grid>
	);
};

export default FooterGridItems;
