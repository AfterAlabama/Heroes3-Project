import Typography from '@mui/material/Typography';
import { FC, ReactElement } from 'react';
import { CenteredFlex } from '../../../../styles/Flex';
import IsLoading from '../../../Common/IsLoading/IsLoading';

interface BlockProps {
	BlockIcon: ReactElement<SVGSVGElement>;
	BlockTitle: string;
	BlockContent: string;
	BlockButton?: () => ReactElement<HTMLButtonElement>;
}

const Block: FC<BlockProps> = ({
	BlockIcon,
	BlockTitle,
	BlockContent,
	BlockButton,
}) => {
	return (
		<CenteredFlex
			sx={{
				height: '100%',
				width: '100%',
				flexDirection: 'column',
				p: 5,
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
					sx={{
						textAlign: 'center',
						cursor: 'default',
						mb: 1,
						mt: 1,
					}}
				>
					{BlockTitle}
				</Typography>
			</IsLoading>
			<IsLoading>
				<Typography
					sx={{
						color: 'gray',
						textAlign: 'center',
						cursor: 'default',
						width: '50%',
						mb: 1,
					}}
				>
					{BlockContent}
				</Typography>
			</IsLoading>
			{BlockButton && BlockButton()}
		</CenteredFlex>
	);
};

export default Block;
