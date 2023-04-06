import MuiBox, { BoxProps } from '@mui/material/Box';
import blue from '@mui/material/colors/blue';
import { styled } from '@mui/material/styles';

export const BackdropIcon= styled((props: BoxProps) => 
  (
   props.children ? <MuiBox {...props} /> : ''
  )
)(() => ({
	color: blue[300],
	fontSize: 60,
	position: 'absolute',
	top: '45%',
	left: '50%',
}));
