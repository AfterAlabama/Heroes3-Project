import { ReactNode } from 'react';
import { CenteredFlex } from '../../../styles/Flex';
import { SxProps, Theme } from '@mui/system';
import { GetSxProp } from '../../../helpers/GetSxProp/GetSxProp';

//creates a customizable row of icons
const IconsRow = ({
	children,
	sx = [],
}: {
	children: ReactNode;
	sx?: SxProps<Theme>;
}) => {
	return (
		<CenteredFlex
			sx={GetSxProp(sx)}
			//default styles
			color='white'
			gap={2}
		>
			{children}
		</CenteredFlex>
	);
};

export default IconsRow;
