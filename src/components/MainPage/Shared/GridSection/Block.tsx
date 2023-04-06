import Typography from '@mui/material/Typography';
import { FC, ReactElement } from 'react';
import { ColumnedFlex } from '../../../../styles/ColumnedFlex';

interface BlockProps {
	BlockIcon: ReactElement<SVGSVGElement>;
	BlockTitle: string;
	BlockContent: string;
	BlockButtonOrInfo: ReactElement<HTMLButtonElement>;
}

const Block: FC<BlockProps> = ({
	BlockIcon,
	BlockTitle,
	BlockContent,
	BlockButtonOrInfo,
}) => {
	return (
		<ColumnedFlex
			sx={{
				height: '100%',
				width: '100%',
				padding: 5,
				boxShadow: '0 0 5px 5px rgba(51,51,255,0.2)',
				'&:hover': {
					boxShadow: '0 0 10px 5px rgba(51,51,255,0.1)',
          backgroundColor: 'white'
				},
			}}
		>
			{BlockIcon}
			<Typography
				sx={{
					fontSize: 30,
					textAlign: 'center',
          cursor: 'default',
					marginBottom: 1,
					marginTop: 1
				}}
			>
				{BlockTitle}
			</Typography>
			<Typography
				sx={{
					color: 'gray',
					textAlign: 'center',
          cursor: 'default',
					width:'50%',
					marginBottom: 1
				}}
			>
				{BlockContent}
			</Typography>
			{BlockButtonOrInfo}
		</ColumnedFlex>
	);
};

export default Block;
