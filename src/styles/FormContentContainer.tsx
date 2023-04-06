import MuiContainer, { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

interface FormContainerProps extends ContainerProps {
	height: string;
}

export const FormContentContainer = styled((props: FormContainerProps) => (
	<MuiContainer {...props} />
))((props) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: props.height,
	width: '23vw',
}));
