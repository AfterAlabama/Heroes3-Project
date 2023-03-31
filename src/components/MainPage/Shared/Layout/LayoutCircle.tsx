import Box from '@mui/material/Box';
import blue from '@mui/material/colors/blue';

const LayoutCircle = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				left: '65vw',
				top: '-20vh',
			}}
		>
			<Box
				sx={{
					width: '120vh',
					height: '120vh',
					backgroundColor: blue[100],
					opacity: 0.3,
					position: 'absolute',
					borderRadius: '50%',
					zIndex: 2,
				}}
			/>
		</Box>
	);
};

export default LayoutCircle;
