import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import blue from '@mui/material/colors/blue';
import { styled } from '@mui/material/styles';

export const BackdropCaption = styled((props: TypographyProps) => (
	<MuiTypography {...props} />
))(() => ({
	fontSize: 50,
	color: blue[100],
	position: 'absolute',
	top: '30%',
	left: '35%',
}));
