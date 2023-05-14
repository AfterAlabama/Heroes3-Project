import IsLoading from '../../Common/IsLoading/IsLoading';
import Typography from '@mui/material/Typography';
import { CenteredFlex } from '../../../styles/Flex';
import { FC, ReactElement } from 'react';

interface HeroComponentBlockProps {
	HeroBlockTitle: string;
	HeroBlockIcon: ReactElement<SVGSVGElement>;
	HeroBlockContent: string;
}

const HeroComponentBlock: FC<HeroComponentBlockProps> = ({
	HeroBlockTitle,
	HeroBlockIcon,
	HeroBlockContent,
}) => {
	return (
		<CenteredFlex
			sx={{
				height: '100%',
				width: '30%',
				p: 5,
				flexDirection: 'column',
				boxShadow: '0 0 5px 5px rgba(51,51,255,0.2)',
				'&:hover': {
					boxShadow: '0 0 10px 5px rgba(51,51,255,0.1)',
					backgroundColor: 'white',
				},
			}}
		>
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
					{HeroBlockTitle}
				</Typography>
			</IsLoading>
			{HeroBlockIcon}
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
					{HeroBlockContent}
				</Typography>
			</IsLoading>
		</CenteredFlex>
	);
};

export default HeroComponentBlock;
