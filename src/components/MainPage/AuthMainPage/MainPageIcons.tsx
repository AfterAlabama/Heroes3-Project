import AnchorIcon from '@mui/icons-material/Anchor';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ColorizeIcon from '@mui/icons-material/Colorize';
import blue from '@mui/material/colors/blue';
import IsLoading from '../../Common/IsLoading/IsLoading';
import IconsRow from '../../Common/IconsRow/IconsRow';
import { CenteredFlex } from '../../../styles/Flex';

const MainPageIcons = () => {
	const icons = [
		<AutoFixHighIcon key={0} />,
		<AnchorIcon key={1} />,
		<ColorizeIcon key={2} />,
	];

	const IconsArray = icons.map((icon, index) => (
		<IsLoading key={index}>
			<CenteredFlex
				sx={{
					border: 'solid rgba(0,0,0,0.3) 1px',
					p: 1,
					borderRadius: '50%',
				}}
			>
				{icon}
			</CenteredFlex>
		</IsLoading>
	));

	return (
		<IconsRow
			sx={{
				mt: 5,
				color: blue[200],
				justifyContent: 'space-around'
			}}
		>
			{IconsArray}
		</IconsRow>
	);
};

export default MainPageIcons;
