import Backdrop from '@mui/material/Backdrop';
import { FC, ReactElement } from 'react';

interface BackDropComponentProps {
	openCondition: boolean;
	LoadingComponent?: ReactElement;
	successComponent?: ReactElement;
}

const BackdropComponent: FC<BackDropComponentProps> = ({
	openCondition,
	LoadingComponent,
	successComponent,
}) => {
	return (
		<Backdrop
			sx={{
				color: '#fff',
				zIndex: (theme) => theme.zIndex.drawer + 1,
			}}
			open={openCondition ? true : false}
		>
			{LoadingComponent}
			{successComponent}
		</Backdrop>
	);
};

export default BackdropComponent;
