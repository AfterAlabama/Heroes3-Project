import MuiBox, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';

export const CenteredFlex = styled(
	forwardRef<HTMLDivElement, BoxProps>((props: BoxProps, ref) => (
		<MuiBox
			ref={ref}
			{...props}
		/>
	))
)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'default'
}));

export const ColumnedFlex = styled(
	forwardRef<HTMLDivElement, BoxProps>((props: BoxProps, ref) => (
		<MuiBox
			ref={ref}
			{...props}
		/>
	))
)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	cursor: 'default'
}));
