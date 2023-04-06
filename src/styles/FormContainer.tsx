import MuiContainer, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

export const FormContainer = styled((props: ContainerProps) => (
	<MuiContainer {...props} />
))(() => ({
	height: '100vh',
	width: '100vw',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));
