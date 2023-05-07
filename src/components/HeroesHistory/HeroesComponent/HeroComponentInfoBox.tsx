import Box from '@mui/material/Box';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import { FC } from 'react';
import { styled } from '@mui/material/styles';

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
			<Typography>{stat}:</Typography>
			<Typography>{value}</Typography>
		</Box>
	);
};

export default HeroComponentInfoBox;
