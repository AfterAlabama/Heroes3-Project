import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { CenteredFlex } from '../../../styles/Flex';
import IsLoading from '../../Common/IsLoading/IsLoading';

const HeroComponentStat = ({
	icon,
	value,
}: {
	icon: ReactNode;
	value: number;
}) => {
	return (
		<CenteredFlex
			sx={{
				flexDirection: 'column',
			}}
		>
			<IsLoading>
				<CenteredFlex
					sx={(theme) => ({
						width: '100px',
						height: '100px',
						borderRadius: '50%',
						boxShadow: `1px 1px 30px ${theme.palette.primary.main}`,
						transition: 'all 0.5s ease',
						'&:hover': {
							backgroundColor: theme.palette.primary.main,
							color: 'white',
							boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
							transform: 'scale(1.2)',
						},
					})}
				>
					{icon}
				</CenteredFlex>
			</IsLoading>
			<IsLoading>
				<Typography
					sx={(theme) => ({
						color: theme.palette.primary.dark,
						fontSize: 40,
						mt: 1,
						cursor: 'default',
					})}
				>
					{value}
				</Typography>
			</IsLoading>
		</CenteredFlex>
	);
};

export default HeroComponentStat;
