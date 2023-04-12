import Box from '@mui/material/Box';
import AnchorIcon from '@mui/icons-material/Anchor';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ColorizeIcon from '@mui/icons-material/Colorize';
import blue from '@mui/material/colors/blue';
import IsLoading from '../../Common/IsLoading/IsLoading';

const AuthContent = () => {
	const icons = [
		<AutoFixHighIcon key={0} />,
		<AnchorIcon key={1} />,
		<ColorizeIcon key={2} />,
	];

	const IconsArray = icons.map((icon, index) => (
		<IsLoading key={index}>
			<Box
				sx={{
					border: 'solid rgba(0,0,0,0.3) 1px',
					p: 1,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: '50%',
				}}
			>
				{icon}
			</Box>
		</IsLoading>
	));

	return (
		<Box
			sx={{
				mt: 5,
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
