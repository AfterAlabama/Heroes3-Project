import Box from '@mui/material/Box';
import LeaveButton from './LeaveButton';
import SubmitButton from './SubmitButton';
import { FC } from 'react';

interface FormButtonsProps {
  isSubmitting: boolean;
  submitCondition: string;
  buttonText:string;
	clickHandler?: () => void;
	margin?: number 
}

const FormButtons: FC<FormButtonsProps> = ({ isSubmitting, submitCondition, buttonText, clickHandler, margin }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'space-around',
			}}
		>
			<LeaveButton margin={margin && margin} />
			<SubmitButton
				isSubmitting={isSubmitting}
				SubmitCondition={submitCondition}
				buttonText= {buttonText}
				margin={margin && margin}
				clickHandler={clickHandler && clickHandler}
			/>
		</Box>
	);
};

export default FormButtons;
