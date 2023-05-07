import Box from '@mui/material/Box';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import IsLoading from '../../Common/IsLoading/IsLoading';

const Typography = styled((props: TypographyProps) => (
	<MuiTypography {...props} />
))(() => ({
	fontSize:18
}));

interface HeroComponentInfoBoxProps {
	stat: string;
	value: string;
}

const HeroComponentInfoBox: FC<HeroComponentInfoBoxProps> = ({
	stat,
	value,
}) => {
	return (
		<Box
			sx={(theme) => ({
				display: 'flex',
				justifyContent: 'space-between',
				m: '10px 50px',
				borderBottom: `solid ${theme.palette.primary.main} 3px`,
				cursor: 'default'
			})}
		>
			<IsLoading>
				<Typography>{stat}:</Typography>
			</IsLoading>
			<IsLoading>
				<Typography>{value}</Typography>
			</IsLoading>
		</Box>
	);
};

export default HeroComponentInfoBox;
