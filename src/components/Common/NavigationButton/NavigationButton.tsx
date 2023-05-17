import blue from '@mui/material/colors/blue';
import IsLoading from '../IsLoading/IsLoading';
import Link, { LinkProps } from '@mui/material/Link';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FC } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
import { GetSxProp } from '../../../helpers/GetSxProp/GetSxProp';

interface NavigationButtonProps {
	//button direction
	direction: string;
	//button description
	buttonText: string;
	//button props
	ButtonProps?: LinkProps;
	ButtonSxProp?: SxProps<Theme>;
}

//creates a customizable navigation button
const NavigationButton: FC<NavigationButtonProps> = ({
	direction,
	buttonText,
	ButtonProps = {},
	ButtonSxProp = [],
}) => {
	const defaultStyle = {
		color: 'white',
		backgroundColor: blue[500],
		textDecoration: 'none',
		p:2,
		borderRadius: '15px',
		width: '150px',
		fontSize: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	return (
		<IsLoading>
			<Link
				onClick={() => window.scroll(0,0)}
				component={ReactRouterLink}
				to={direction}
				sx={{ ...defaultStyle, ...GetSxProp(ButtonSxProp)[0] }}
				{...ButtonProps}
			>
				{buttonText}
			</Link>
		</IsLoading>
	);
};

export default NavigationButton;
