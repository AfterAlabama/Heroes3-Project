import Button from '@mui/material/Button';
import { FC } from 'react';
import IsLoading from '../../Common/IsLoading/IsLoading';

interface SubmitButtonProps {
	isSubmitting: boolean;
	buttonText: string;
	SubmitCondition: string;
	clickHandler?: () => void;
	margin?: number
}

const SubmitButton: FC<SubmitButtonProps> = ({
	isSubmitting,
	buttonText,
	SubmitCondition,
	clickHandler,
	margin
}) => {
	return (
		<IsLoading sx={() => ({
			mb: margin
		})} >
			<Button
				type='submit'
				disabled={isSubmitting}
				onClick={clickHandler && clickHandler}
				sx={{
					width: 100,
					height: 50,
					backgroundColor: SubmitCondition
				}}
			>
				{buttonText}
			</Button>
		</IsLoading>
	);
};

export default SubmitButton;
