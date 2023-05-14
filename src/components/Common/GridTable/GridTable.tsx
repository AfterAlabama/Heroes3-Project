import { SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { GetSxProp } from '../../../helpers/GetSxProp/GetSxProp';
import IsLoading from '../IsLoading/IsLoading';

//creates a customizable grid table wrapped in div (one grid item is a column with one th and corresponding td)

interface GridTableProps {
	//th and its props
	th: string[];
	thSx?: SxProps<Theme>;
	//td and its props
	td: string[][];
	tdSx?: SxProps<Theme>;
	//props for a Box wrapper
	wrapperSx?: SxProps<Theme>;
	//grid props for container and item
	gridContainerProps?: GridProps;
	gridItemProps?: GridProps;
}

const GridTable: FC<GridTableProps> = ({
	th,
	thSx = [],
	td,
	tdSx = [],
	wrapperSx = [],
	gridContainerProps = {},
	gridItemProps = {},
}) => {
	const displayTableContent = td.map((items, index) => (
		<Grid
			key={index}
			item
			{...gridItemProps}
		>
			<IsLoading>
				<Typography
					mb={1}
					fontWeight={'bold'}
					sx={GetSxProp(thSx)}
				>
					{th[index]}
				</Typography>
			</IsLoading>
			{items.map((item) => (
				<IsLoading key={item}>
					<Typography
						fontSize={15}
						lineHeight={2}
						sx={GetSxProp(tdSx)}
					>
						{item}
					</Typography>
				</IsLoading>
			))}
		</Grid>
	));

	return (
		<Box sx={GetSxProp(wrapperSx)}>
			<Grid
				container
				{...gridContainerProps}
			>
				{displayTableContent}
			</Grid>
		</Box>
	);
};

export default GridTable;
