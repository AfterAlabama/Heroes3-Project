import Button from '@mui/material/Button';
import { FC } from 'react';
import IsLoading from '../../Common/IsLoading/IsLoading';

interface SubmitButtonProps {
	isSubmitting: boolean;
	buttonText: string;
	SubmitCondition: string;
	margin?: number
}

const SubmitButton: FC<SubmitButtonProps> = ({
	isSubmitting,
	buttonText,
	SubmitCondition,
	margin
}) => {
	return (
		<IsLoading sx={() => ({
			mb: margin
		})} >
			<Button
				type='submit'
				disabled={isSubmitting}
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
