import Button from '@mui/material/Button';
import { FC } from 'react';

interface SubmitButtonProps {
	isSubmitting: boolean;
	buttonText: string;
	SubmitCondition: string;
	clickHandler?: () => void
}

const SubmitButton: FC<SubmitButtonProps> = ({
	isSubmitting,
	buttonText,
	SubmitCondition,
	clickHandler
}) => {
	return (
		<Button
			type='submit'
			disabled={isSubmitting}
			onClick={clickHandler && clickHandler}
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
