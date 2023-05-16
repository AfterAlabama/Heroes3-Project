import { SxProps, Theme } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import { FC, ReactNode } from 'react';
import { GetSxProp } from '../../../helpers/GetSxProp/GetSxProp';

interface NavbarButtonProps {
	//button content
	buttonContent: ReactNode;
	//button props
	buttonProps?: ButtonProps;
	buttonSxProp?: SxProps<Theme>;
	//button click handler
	buttonClickHandler: (...args: unknown[]) => unknown;
}

//creates customizable navbar button
const NavbarButton: FC<NavbarButtonProps> = ({
	buttonContent,
	buttonClickHandler,
	buttonProps = {},
	buttonSxProp = [],
}) => {
	const defaultStyle = {
		ml: 2,
		mr: 2,
		transition: 'all 0.5s ease',
		'&:hover': {
			p: 1,
			borderRadius: '15px',
			boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
		},
	};

	return (
		<Button
			{...buttonProps}
			sx={{ ...defaultStyle, ...GetSxProp(buttonSxProp)[0] }}
			onClick={buttonClickHandler}
			color='inherit'
		>
			{buttonContent}
		</Button>
	);
};

export default NavbarButton;
