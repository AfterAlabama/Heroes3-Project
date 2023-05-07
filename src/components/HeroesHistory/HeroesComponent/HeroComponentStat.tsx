import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { CenteredFlex } from '../../../styles/CenteredFlex';

const HeroComponentStat = ({
	icon,
	value,
}: {
	icon: ReactNode;
	value: number;
}) => {
	return (
		<CenteredFlex sx={{
			flexDirection: 'column'
		}} >
			<CenteredFlex
				sx={(theme) => ({
					width: '120px',
					height: '120px',
					borderRadius: '50%',
					boxShadow: `1px 1px 30px ${theme.palette.primary.main}`,
				})}
			>
				{icon}
			</CenteredFlex>
			<Typography
				sx={(theme) => ({
					color: theme.palette.primary.dark,
					fontSize: 50,
					cursor: 'default',
				})}
			>
				{value}
			</Typography>
		</CenteredFlex>
	);
};

export default HeroComponentStat;
