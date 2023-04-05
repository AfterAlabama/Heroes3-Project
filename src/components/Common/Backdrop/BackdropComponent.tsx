import Backdrop from '@mui/material/Backdrop';
import { FC, ReactElement } from 'react';

interface BackDropComponentProps {
	openCondition: boolean;
	loadingComponent?: ReactElement;
	successComponent?: ReactElement;
}

const BackdropComponent: FC<BackDropComponentProps> = ({
	openCondition,
	loadingComponent,
	successComponent,
}) => {
	const backdropOpenCondition = openCondition ? true : false;

	return (
		<Backdrop
			sx={{
				color: '#fff',
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
			open={backdropOpenCondition}
		>
			{loadingComponent && loadingComponent}
			{successComponent && successComponent}
		</Backdrop>
	);
};

export default BackdropComponent;
