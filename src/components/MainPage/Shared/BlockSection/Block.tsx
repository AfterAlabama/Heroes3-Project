import Typography from '@mui/material/Typography';
import { FC, ReactElement } from 'react';
import { ColumnedFlex } from '../../../../styles/Flex';
import IsLoading from '../../../Common/IsLoading/IsLoading';

interface BlockProps {
	BlockIcon: ReactElement<SVGSVGElement>;
	BlockTitle: string;
	BlockContent: string;
	BlockButton: ReactElement<HTMLButtonElement>;
}

const Block: FC<BlockProps> = ({
	BlockIcon,
	BlockTitle,
	BlockContent,
	BlockButton,
}) => {
	return (
		<ColumnedFlex
			component='article'
			sx={{
				gap:2,
				p:5,
				width: '500px',
				boxShadow: '0 0 5px 5px rgba(51,51,255,0.2)',
				transition: 'all 0.2s ease',
				'&:hover': {
					boxShadow: '0 0 10px 5px rgba(51,51,255,0.1)',
					backgroundColor: 'white',
				},
			}}
		>
			{BlockIcon}
			<IsLoading>
				<Typography
					variant='h4'
				>
					{BlockTitle}
				</Typography>
			</IsLoading>
			<IsLoading>
				<Typography
					sx={{
						color: 'gray',
						textAlign: 'center',
						width: '60%',
					}}
				>
					{BlockContent}
				</Typography>
			</IsLoading>
			{BlockButton}
		</ColumnedFlex>
	);
};

export default Block;
