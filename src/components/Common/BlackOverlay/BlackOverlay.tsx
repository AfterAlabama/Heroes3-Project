import Box from "@mui/material/Box";

const BlackOverlay = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0,0,0,0.5)',
				borderRadius: '30px',
			}}
		/>
	);
};

export default BlackOverlay;
