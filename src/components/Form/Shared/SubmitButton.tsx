import Button from '@mui/material/Button';
import { FC } from 'react';

interface SubmitButtonProps {
	isSubmitting: boolean;
	buttonText: string;
	SubmitCondition: string | string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
	isSubmitting,
	buttonText,
	SubmitCondition,
}) => {
	return (
		<Button
			type='submit'
			disabled={isSubmitting}
			sx={{
				width: 100,
				height: 50,
				backgroundColor: SubmitCondition,
			}}
		>
			{buttonText}
		</Button>
	);
};

export default SubmitButton;
