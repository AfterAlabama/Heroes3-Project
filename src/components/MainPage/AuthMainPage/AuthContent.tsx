import Box from '@mui/material/Box';
import AnchorIcon from '@mui/icons-material/Anchor';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ColorizeIcon from '@mui/icons-material/Colorize';
import blue from '@mui/material/colors/blue';

const AuthContent = () => {
	const icons = [
		<AutoFixHighIcon key={0} />,
		<AnchorIcon key={1} />,
		<ColorizeIcon key={2} />,
	];

	const IconsArray = icons.map((icon, index) => (
		<Box
			key={index}
			sx={{
				border: 'solid rgba(0,0,0,0.3) 1px',
				padding: 1,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '50%',
			}}
		>
			{icon}
		</Box>
	));

	return (
		<Box
			sx={{
				marginTop: 5,
				color: blue[200],
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around',
			}}
		>
			{IconsArray}
		</Box>
	);
};

export default AuthContent;
