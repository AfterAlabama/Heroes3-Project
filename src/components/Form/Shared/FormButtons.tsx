import LeaveButton from './LeaveButton';
import SubmitButton from './SubmitButton';
import { FC } from 'react';
import { CenteredFlex } from '../../../styles/Flex';

interface FormButtonsProps {
	isSubmitting: boolean;
	submitCondition: string;
	buttonText: string;
	margin?: number;
}

const FormButtons: FC<FormButtonsProps> = ({
	isSubmitting,
	submitCondition,
	buttonText,
	margin,
}) => {
	return (
		<CenteredFlex
			sx={{
				width: '100%',
				justifyContent: 'space-around',
			}}
		>
			<LeaveButton margin={margin && margin} />
			<SubmitButton
				isSubmitting={isSubmitting}
				SubmitCondition={submitCondition}
				buttonText={buttonText}
				margin={margin && margin}
			/>
		</CenteredFlex>
	);
};

export default FormButtons;
